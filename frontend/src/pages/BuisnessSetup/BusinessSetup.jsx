import { useState } from 'react'
import './BusinessSetup.css'
import Navbar from '../../components/Navbar/Navbar'

function BusinessSetup({ userName, onComplete, onBack }) {

  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    businessSize: '',
    location: '',
    analysis: []
  })

  const [errors, setErrors] = useState({})
  const [selectedFile, setSelectedFile] = useState(null)
  const handleFileChange = (e) => {
  const file = e.target.files[0]

  if (!file) return

  const allowedTypes = ['.csv', '.xlsx', '.xls']

  const fileExtension =
    '.' + file.name.split('.').pop().toLowerCase()

  if (!allowedTypes.includes(fileExtension)) {
    setSelectedFile(null)

    setErrors({
      ...errors,
      file: 'Please upload a CSV or Excel file'
    })

    e.target.value = ''
    return
  }

  setSelectedFile(file)

  setErrors({
    ...errors,
    file: ''
  })
}

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
    setErrors({
      ...errors,
      [name]: ''
    })
  }

  const handleAnalysisChange = (option) => {
  
    let updatedAnalysis

    if (formData.analysis.includes(option)) {
      updatedAnalysis = formData.analysis.filter(
        item => item !== option
      )
    } else {
      updatedAnalysis = [
        ...formData.analysis,
        option
      ]
    }

    setFormData({
      ...formData,
      analysis: updatedAnalysis
    })

    setErrors({
      ...errors,
      analysis: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    // Business Name
    if (!formData.businessName.trim()) {
      newErrors.businessName =
        'Business name is required'
    }

    // Business Type
    if (!formData.businessType) {
      newErrors.businessType =
        'Please select a business type'
    }

    // Business Size
    if (!formData.businessSize) {
      newErrors.businessSize =
        'Please select your business size'
    }

    // Location
    if (!formData.location.trim()) {
      newErrors.location =
        'Business location is required'
    }

    // Analysis
    if (formData.analysis.length === 0) {
      newErrors.analysis =
        'Please select at least one option'
    }

    setErrors(newErrors)

    // Stop here if there are errors
    if (Object.keys(newErrors).length > 0) {
      return
    }

    // Everything is valid
    onComplete(selectedFile)
  }

  return (
    <>
    <Navbar />
    <div className="setup-page">

      <div className="setup-card">

       


        {/* Progress */}
        <div className="setup-progress">

          <div className="progress-step active">
            <span>1</span>
            <small>Account</small>
          </div>

          <div className="progress-line active"></div>

          <div className="progress-step active">
            <span>2</span>
            <small>Business</small>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <span>3</span>
            <small>Dashboard</small>
          </div>

        </div>


        {/* Heading */}
        <div className="setup-heading">

          <h1>
            Set Up Your Business
          </h1>

          <p>
            Tell us a little about your business so
            BizIntel AI can personalize your experience.
          </p>

        </div>


        {/* Business Form */}
        <form onSubmit={handleSubmit}>

          {/* Business Name + Type */}
          <div className="setup-form-row">

            <div className="setup-group">

              <label>
                Business Name
              </label>

              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="e.g. Tom Enterprises"
              />

              {errors.businessName && (
                <small className="setup-error">
                  ⚠ {errors.businessName}
                </small>
              )}

            </div>


            <div className="setup-group">

              <label>
                Business Type
              </label>

              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
              >

                <option value="">
                  Select business type
                </option>

                <option>
                  E-commerce
                </option>

                <option>
                  Retail
                </option>

                <option>
                  Manufacturing
                </option>

                <option>
                  Finance
                </option>

                <option>
                  Healthcare
                </option>

                <option>
                  Technology
                </option>

                <option>
                  Other
                </option>

              </select>

              {errors.businessType && (
                <small className="setup-error">
                  ⚠ {errors.businessType}
                </small>
              )}

            </div>

          </div>


          {/* Business Size + Location */}
          <div className="setup-form-row">

            <div className="setup-group">

              <label>
                Business Size
              </label>

              <select
                name="businessSize"
                value={formData.businessSize}
                onChange={handleChange}
              >

                <option value="">
                  Select business size
                </option>

                <option>
                  Small
                </option>

                <option>
                  Medium
                </option>

                <option>
                  Large
                </option>

                <option>
                  Enterprise
                </option>

              </select>

              {errors.businessSize && (
                <small className="setup-error">
                  ⚠ {errors.businessSize}
                </small>
              )}

            </div>


            <div className="setup-group">

              <label>
                Business Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, Country"
              />

              {errors.location && (
                <small className="setup-error">
                  ⚠ {errors.location}
                </small>
              )}

            </div>

          </div>


          {/* Analysis */}
          <div className="setup-group">

            <label>
              What do you want to analyze?
            </label>

            <div className="analysis-options">

              <label className="analysis-option">

                <input
                  type="checkbox"
                  checked={formData.analysis.includes(
                    'Sales & Revenue'
                  )}
                  onChange={() =>
                    handleAnalysisChange(
                      'Sales & Revenue'
                    )
                  }
                />

                <span>
                  📈 Sales & Revenue
                </span>

              </label>


              <label className="analysis-option">

                <input
                  type="checkbox"
                  checked={formData.analysis.includes(
                    'Profit & Expenses'
                  )}
                  onChange={() =>
                    handleAnalysisChange(
                      'Profit & Expenses'
                    )
                  }
                />

                <span>
                  💰 Profit & Expenses
                </span>

              </label>


              <label className="analysis-option">

                <input
                  type="checkbox"
                  checked={formData.analysis.includes(
                    'Products & Inventory'
                  )}
                  onChange={() =>
                    handleAnalysisChange(
                      'Products & Inventory'
                    )
                  }
                />

                <span>
                  📦 Products & Inventory
                </span>

              </label>


              <label className="analysis-option">

                <input
                  type="checkbox"
                  checked={formData.analysis.includes(
                    'Customers'
                  )}
                  onChange={() =>
                    handleAnalysisChange(
                      'Customers'
                    )
                  }
                />

                <span>
                  👥 Customers
                </span>

              </label>

            </div>

            {errors.analysis && (
              <small className="setup-error">
                ⚠ {errors.analysis}
              </small>
            )}

          </div>


          {/* Data option */}
         <div className="data-box">

  <div className="data-icon">
    📊
  </div>

  <div className="data-content">

    <strong>
      Have business data already?
    </strong>

    <p>
      Upload your CSV or Excel file to analyze
      your actual business data.
    </p>

    {selectedFile && (
      <div className="selected-file">
        ✓ {selectedFile.name}
      </div>
    )}

    {errors.file && (
      <small className="setup-error">
        ⚠ {errors.file}
      </small>
    )}

  </div>

  <label className="upload-btn">

    Upload File

    <input
      type="file"
      accept=".csv,.xlsx,.xls"
      onChange={handleFileChange}
      hidden
    />

  </label>

</div>


          {/* Actions */}
          <div className="setup-actions">

            <button
              type="button"
              className="setup-back"
              onClick={onBack}
            >
              ← Back
            </button>

            <button
              type="submit"
              className="setup-continue"
            >
              Continue to Dashboard →
            </button>

          </div>

        </form>

      </div>

    </div>
    </>
  )
}

export default BusinessSetup