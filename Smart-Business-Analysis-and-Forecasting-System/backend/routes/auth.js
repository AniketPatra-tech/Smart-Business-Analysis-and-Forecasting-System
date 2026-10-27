
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const {
            fullName,
            email,
            password,
            confirmPassword,
            businessName,
            businessType
        } = req.body;

        if (
            !fullName?.trim() ||
            !email?.trim() ||
            !password ||
            !businessName?.trim() ||
            !businessType?.trim()
        ) {
            return res.status(400).json({
                message: 'Please fill in all required fields.'
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                message: 'Passwords do not match.'
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: 'Password must be at least 8 characters long.'
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const existingUser = await User.findOne({
            email: normalizedEmail
        });

        if (existingUser) {
            return res.status(409).json({
                message: 'An account with this email already exists.'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            fullName: fullName.trim(),
            email: normalizedEmail,
            password: hashedPassword,
            businessName: businessName.trim(),
            businessType: businessType.trim()
        });

        return res.status(201).json({
            message: 'Registration successful!',
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                businessName: user.businessName,
                businessType: user.businessType
            }
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                message: 'An account with this email already exists.'
            });
        }

        console.error('Registration error:', error.message);

        return res.status(500).json({
            message: 'Registration failed. Please try again.'
        });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check required fields
        if (!email?.trim() || !password) {
            return res.status(400).json({
                message: 'Email and password are required.'
            });
        }

        // Find the registered user
        const user = await User.findOne({
            email: email.trim().toLowerCase()
        });

        if (!user) {
            return res.status(401).json({
                message: 'Invalid email or password.'
            });
        }

        // Compare entered password with hashed password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: 'Invalid email or password.'
            });
        }

        // Send user details after successful login
        return res.status(200).json({
            message: 'Login successful!',
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                businessName: user.businessName,
                businessType: user.businessType
            }
        });
    } catch (error) {
        console.error('Login error:', error.message);

        return res.status(500).json({
            message: 'Login failed. Please try again.'
        });
    }
});

module.exports = router;
