import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Signup() {
  const [userType, setUserType] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Form data state - different fields for different user types
  const [formData, setFormData] = useState({
    // Student fields
    studentName: '',
    studentEmail: '',
    studentPhone: '',
    studentAddress: '',
    studentPinCode: '',
    studentCity: '',
    studentState: '',
    // Music Academy fields
    academyName: '',
    businessRegistrationNo: '',
    taxId: '',
    address: '',
    pinCode: '',
    country: 'India',
    city: '',
    state: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    // Building User fields
    buildingName: '',
    buildingAddress: '',
    buildingPinCode: '',
    buildingCity: '',
    buildingState: '',
    buildingContact: '',
    buildingEmail: '',
    buildingPhone: '',
    // Common fields
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  // Get total steps based on user type
  const getTotalSteps = () => {
    switch(userType) {
      case 'student':
        return 3;
      case 'music-academy':
        return 5;
      case 'building-user':
        return 4;
      default:
        return 3;
    }
  };

  const totalSteps = getTotalSteps();

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    // Don't show form immediately - wait for button click
  };

  const handleContinueButton = (e) => {
    e.preventDefault();
    if (!userType) {
      alert('Please select a registration type');
      return;
    }
    // Show form when button is clicked
    setShowForm(true);
    // Reset to step 1
    setCurrentStep(1);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Auto-fill city and state based on PIN code (mock implementation)
    if ((name === 'pinCode' || name === 'studentPinCode' || name === 'buildingPinCode') && value.length === 6) {
      // Mock: You can integrate with a real API here
      const cityField = name === 'pinCode' ? 'city' : name === 'studentPinCode' ? 'studentCity' : 'buildingCity';
      setFormData(prev => ({
        ...prev,
        [cityField]: 'Auto-filled from PIN code'
      }));
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle final submission
    console.log('Form submitted:', { userType, ...formData });
  };

  const getFormTitle = () => {
    switch(userType) {
      case 'student':
        return 'Student Registration';
      case 'music-academy':
        return 'Music Academy Registration';
      case 'building-user':
        return 'Building User Registration';
      default:
        return 'Registration';
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section - Image */}
        <div className="login-left">
          <div className="login-left-content">
            <div className="login-header">
              <Link to="/" className="login-back-button">
                <span className="login-back-arrow">←</span> Back to website
              </Link>
            </div>
            <div className="login-tagline">
              <div className="login-carousel-indicator">
                <span className="login-indicator-dot active"></span>
                <span className="login-indicator-dot"></span>
                <span className="login-indicator-dot"></span>
              </div>
            </div>
          </div>
          <div className="login-image-overlay"></div>
          <img 
            src="/images/landing.jpg" 
            alt="Background" 
            className="login-background-image"
          />
        </div>

        {/* Right Section - Form */}
        <div className="login-right">
          <div className={`login-form-container ${showForm ? 'has-registration-form' : ''}`}>
            {!showForm ? (
              <>
            <h1 className="login-title">Create an account</h1>
            <p className="login-subtitle">
              Already have an account? <Link to="/login" className="login-link">Log in</Link>
            </p>

                <form className="login-form" onSubmit={handleContinueButton}>
              {/* User Type Selection */}
              <div className="login-form-group">
                <label className="login-label">Select your registration type *</label>
                <div className="login-user-type-container">
                  <label 
                    htmlFor="userType-student"
                    className={`login-user-type-field-wrapper ${userType === 'student' ? 'login-user-type-active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="userType"
                      id="userType-student"
                      value="student"
                      checked={userType === 'student'}
                      onChange={handleUserTypeChange}
                      className="login-user-type-radio"
                    />
                    <span className="login-user-type-text">Student</span>
                  </label>
                  <label 
                    htmlFor="userType-music-academy"
                    className={`login-user-type-field-wrapper ${userType === 'music-academy' ? 'login-user-type-active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="userType"
                      id="userType-music-academy"
                      value="music-academy"
                      checked={userType === 'music-academy'}
                      onChange={handleUserTypeChange}
                      className="login-user-type-radio"
                    />
                    <span className="login-user-type-text">Music Academy</span>
                  </label>
                  <label 
                    htmlFor="userType-building-user"
                    className={`login-user-type-field-wrapper ${userType === 'building-user' ? 'login-user-type-active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="userType"
                      id="userType-building-user"
                      value="building-user"
                      checked={userType === 'building-user'}
                      onChange={handleUserTypeChange}
                      className="login-user-type-radio"
                    />
                    <span className="login-user-type-text">Building User</span>
                  </label>
                </div>
              </div>

              {/* Continue Button */}
              {userType && (
                <button 
                  type="submit" 
                  className="login-submit-button login-continue-button"
                >
                  Continue
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
                </form>
              </>
            ) : (
              <form className="registration-multi-step-form" onSubmit={handleSubmit}>
                {/* Header with Icon and Title */}
                <div className="registration-header">
                  <div className="registration-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18V5L21 3V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h1 className="registration-title">{getFormTitle()}</h1>
                  {/* <p className="registration-step-indicator">Step {currentStep} of {totalSteps}</p> */}
                  
                  {/* Progress Steps */}
                  <div className="registration-progress-steps">
                    {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                      <div
                        key={step}
                        className={`registration-progress-step ${step === currentStep ? 'active' : step < currentStep ? 'completed' : ''}`}
                      >
                        <div className="registration-progress-circle">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Registration Form */}
                {userType === 'student' && (
                  <>
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <div className="registration-step-content">
                        {/* <h2 className="registration-section-title">Personal Information</h2> */}
                        
                        <div className="registration-form-group">
                          <label className="registration-label">
                            FULL NAME <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            name="studentName"
                            className="registration-input"
                            placeholder="Enter your full name"
                            value={formData.studentName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">
                            EMAIL <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            name="studentEmail"
                            className="registration-input"
                            placeholder="Enter your email address"
                            value={formData.studentEmail}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">
                            PHONE <span className="required">*</span>
                          </label>
                          <input
                            type="tel"
                            name="studentPhone"
                            className="registration-input"
                            placeholder="Enter your phone number"
                            value={formData.studentPhone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 2: Address */}
                    {currentStep === 2 && (
                      <div className="registration-step-content">
                        {/* <h2 className="registration-section-title">Address Information</h2> */}
                        
                        <div className="registration-form-group">
                          <label className="registration-label">
                            ADDRESS <span className="required">*</span>
                          </label>
                          <textarea
                            name="studentAddress"
                            className="registration-input registration-textarea"
                            placeholder="Street address"
                            value={formData.studentAddress}
                            onChange={handleInputChange}
                            required
                            rows="3"
                          />
                        </div>

                        <div className="registration-form-row">
                          <div className="registration-form-group">
                            <label className="registration-label">
                              PIN CODE <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="studentPinCode"
                              className="registration-input"
                              placeholder="Enter 6-digit PIN code"
                              value={formData.studentPinCode}
                              onChange={handleInputChange}
                              maxLength="6"
                              required
                            />
                          </div>

                          <div className="registration-form-group">
                            <label className="registration-label">
                              CITY <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="studentCity"
                              className="registration-input"
                              placeholder="City"
                              value={formData.studentCity}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">
                            STATE <span className="required">*</span>
                          </label>
                          <select
                            name="studentState"
                            className="registration-input"
                            value={formData.studentState}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select State</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Gujarat">Gujarat</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Account Setup */}
                    {currentStep === 3 && (
                      <div className="registration-step-content">
                        {/* <h2 className="registration-section-title">Account Setup</h2> */}
                        
                        <div className="registration-form-group">
                          <label className="registration-label">
                            PASSWORD <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="registration-input"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">
                            CONFIRM PASSWORD <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            className="registration-input"
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-checkbox-group">
                          <label className="registration-checkbox-label">
                            <input
                              type="checkbox"
                              name="termsAccepted"
                              checked={formData.termsAccepted}
                              onChange={handleInputChange}
                              className="registration-checkbox"
                              required
                            />
                            <span className="registration-checkbox-text">
                              I agree to the Terms and Conditions <span className="required">*</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Music Academy Registration Form */}
                {userType === 'music-academy' && (
                  <>
                    {/* Step 1: Academy Information */}
                    {currentStep === 1 && (
                      <div className="registration-step-content">
                        {/* <h2 className="registration-section-title">Academy Information</h2> */}
                        
                        <div className="registration-form-group">
                          <label className="registration-label">
                            ACADEMY NAME <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            name="academyName"
                            className="registration-input"
                            placeholder="Enter academy name"
                            value={formData.academyName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">BUSINESS REGISTRATION NO.</label>
                          <input
                            type="text"
                            name="businessRegistrationNo"
                            className="registration-input"
                            placeholder="Registration number"
                            value={formData.businessRegistrationNo}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">TAX ID / GST</label>
                          <input
                            type="text"
                            name="taxId"
                            className="registration-input"
                            placeholder="Tax ID"
                            value={formData.taxId}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 2: Address Information */}
                    {currentStep === 2 && (
                      <div className="registration-step-content">
                        {/* <h2 className="registration-section-title">Address Information</h2> */}
                        
                        <div className="registration-form-group">
                          <label className="registration-label">
                            ADDRESS <span className="required">*</span>
                          </label>
                          <textarea
                            name="address"
                            className="registration-input registration-textarea"
                            placeholder="Street address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            rows="3"
                          />
                        </div>

                        <div className="registration-form-row">
                          <div className="registration-form-group">
                            <label className="registration-label">
                              PIN CODE <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="pinCode"
                              className="registration-input"
                              placeholder="Enter 6-digit PIN code"
                              value={formData.pinCode}
                              onChange={handleInputChange}
                              maxLength="6"
                              required
                            />
                          </div>

                          <div className="registration-form-group">
                            <label className="registration-label">
                              COUNTRY <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="country"
                              className="registration-input"
                              value={formData.country}
                              readOnly
                            />
                          </div>
                        </div>

                        {/* <p className="registration-info-text">City and State will auto-fill</p> */}
                      </div>
                    )}

                    {/* Step 3: Location Details */}
                    {currentStep === 3 && (
                      <div className="registration-step-content">
                        {/* <h2 className="registration-section-title">Location Details</h2> */}
                        
                        <div className="registration-form-row">
                          <div className="registration-form-group">
                            <label className="registration-label">
                              CITY <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              className="registration-input"
                              placeholder="Auto-filled from PIN code"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          <div className="registration-form-group">
                            <label className="registration-label">
                              STATE <span className="required">*</span>
                            </label>
                            <select
                              name="state"
                              className="registration-input"
                              value={formData.state}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="">Select State</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Gujarat">Gujarat</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Contact Information */}
                    {currentStep === 4 && (
                      <div className="registration-step-content">
                        {/* <h2 className="registration-section-title">Contact Information</h2> */}
                        
                        <div className="registration-form-group">
                          <label className="registration-label">
                            CONTACT PERSON <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            name="contactPerson"
                            className="registration-input"
                            placeholder="Enter contact person name"
                            value={formData.contactPerson}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">
                            EMAIL <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="registration-input"
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">
                            PHONE <span className="required">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            className="registration-input"
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">WEBSITE</label>
                          <input
                            type="url"
                            name="website"
                            className="registration-input"
                            placeholder="Enter website URL (optional)"
                            value={formData.website}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 5: Account Setup */}
                    {currentStep === 5 && (
                      <div className="registration-step-content">
                        {/* <h2 className="registration-section-title">Account Setup</h2> */}
                        
                        <div className="registration-form-group">
                          <label className="registration-label">
                            PASSWORD <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="registration-input"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">
                            CONFIRM PASSWORD <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            className="registration-input"
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-checkbox-group">
                          <label className="registration-checkbox-label">
                            <input
                              type="checkbox"
                              name="termsAccepted"
                              checked={formData.termsAccepted}
                              onChange={handleInputChange}
                              className="registration-checkbox"
                              required
                            />
                            <span className="registration-checkbox-text">
                              I agree to the Terms and Conditions <span className="required">*</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Building User Registration Form */}
                {userType === 'building-user' && (
                  <>
                    {/* Step 1: Building Information */}
                    {currentStep === 1 && (
                      <div className="registration-step-content">
                        {/* <h2 className="registration-section-title">Building Information</h2> */}
                        
                        <div className="registration-form-group">
                          <label className="registration-label">
                            BUILDING NAME <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            name="buildingName"
                            className="registration-input"
                            placeholder="Enter building name"
                            value={formData.buildingName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">
                            ADDRESS <span className="required">*</span>
                          </label>
                          <textarea
                            name="buildingAddress"
                            className="registration-input registration-textarea"
                            placeholder="Street address"
                            value={formData.buildingAddress}
                            onChange={handleInputChange}
                            required
                            rows="3"
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 2: Location Details */}
                    {currentStep === 2 && (
                      <div className="registration-step-content">
                        {/* <h2 className="registration-section-title">Location Details</h2> */}
                        
                        <div className="registration-form-row">
                          <div className="registration-form-group">
                            <label className="registration-label">
                              PIN CODE <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="buildingPinCode"
                              className="registration-input"
                              placeholder="Enter 6-digit PIN code"
                              value={formData.buildingPinCode}
                              onChange={handleInputChange}
                              maxLength="6"
                              required
                            />
                          </div>

                          <div className="registration-form-group">
                            <label className="registration-label">
                              CITY <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="buildingCity"
                              className="registration-input"
                              placeholder="City"
                              value={formData.buildingCity}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">
                            STATE <span className="required">*</span>
                          </label>
                          <select
                            name="buildingState"
                            className="registration-input"
                            value={formData.buildingState}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select State</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Gujarat">Gujarat</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Contact Information */}
                    {currentStep === 3 && (
                      <div className="registration-step-content">
                        {/* <h2 className="registration-section-title">Contact Information</h2> */}
                        
                        <div className="registration-form-group">
                          <label className="registration-label">
                            CONTACT PERSON <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            name="buildingContact"
                            className="registration-input"
                            placeholder="Enter contact person name"
                            value={formData.buildingContact}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">
                            EMAIL <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            name="buildingEmail"
                            className="registration-input"
                            placeholder="Enter email address"
                            value={formData.buildingEmail}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">
                            PHONE <span className="required">*</span>
                          </label>
                          <input
                            type="tel"
                            name="buildingPhone"
                            className="registration-input"
                            placeholder="Enter phone number"
                            value={formData.buildingPhone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 4: Account Setup */}
                    {currentStep === 4 && (
                      <div className="registration-step-content">
                        {/* <h2 className="registration-section-title">Account Setup</h2> */}
                        
                        <div className="registration-form-group">
                          <label className="registration-label">
                            PASSWORD <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="registration-input"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-form-group">
                          <label className="registration-label">
                            CONFIRM PASSWORD <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            className="registration-input"
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-checkbox-group">
                          <label className="registration-checkbox-label">
                            <input
                              type="checkbox"
                              name="termsAccepted"
                              checked={formData.termsAccepted}
                              onChange={handleInputChange}
                              className="registration-checkbox"
                              required
                            />
                            <span className="registration-checkbox-text">
                              I agree to the Terms and Conditions <span className="required">*</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Navigation Buttons */}
                <div className="registration-navigation">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="registration-button registration-button-secondary"
                    >
                      Previous
                    </button>
                  )}
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="registration-button registration-button-primary"
                    >
                      Next
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="registration-button registration-button-primary"
                    >
                      Submit
              </button>
                  )}
                </div>
            </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
