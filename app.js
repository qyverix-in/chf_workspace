/**
 * CoHeart Workspace — Universal Accessible Runtime (app.js)
 * Supports: Text-to-Speech (Web Speech API), Voice-to-Text (SpeechRecognition),
 * Multilingual Translation (EN/HI/TE), Role switching, Dark Mode, and Ctrl+K Omnisearch.
 */

(function () {
  'use strict';

  // 1. Multilingual Translations Dictionary
  const I18N = {
    en: {
      home: 'Home',
      help: 'Help',
      dark: 'Dark',
      light: 'Light',
      punch_in: 'Punch In',
      punch_out: 'Punch Out',
      add_record: 'New Record',
      apply_leave: 'Apply Leave',
      expenses: 'Expenses',
      approvals: 'Approvals',
      save: 'Save & Submit',
      saved_success: 'Saved successfully!',
      undo: 'Undo',
      yes: 'Yes',
      no: 'No',
      listen: 'Listen',
      speak_to_type: 'Speak now...',
      welcome_worker: 'Welcome, Sunil Patro (Field Worker)',
      welcome_admin: 'Welcome, Vikram Reddy (Administrator)',
      help_dashboard: 'This is your Home screen. Tap the big green button to punch in today, or tap the blue button to add a field record.',
      help_format_entry: 'Fill out this simple form one question at a time. Tap the speaker to hear the question, or tap the microphone to speak your answer.',
      help_attendance: 'Tap the green button to mark your attendance. Your GPS location will be verified automatically.',
      help_finance: 'Here you can record your field travel and expenses, or view your monthly salary payslip.',
      help_approvals: 'Review pending requests from your team. Tap the green tick to approve in one click.'
    },
    hi: {
      home: 'होम (मुख्य)',
      help: 'मदद',
      dark: 'डार्क मोड',
      light: 'लाइट मोड',
      punch_in: 'हाजिरी लगाएं (पंच इन)',
      punch_out: 'काम समाप्त (पंच आउट)',
      add_record: 'नया रिकॉर्ड दर्ज करें',
      apply_leave: 'छुट्टी मांगें',
      expenses: 'खर्चे का बिल',
      approvals: 'मंजूरी (अपुवल)',
      save: 'सहेजें और भेजें',
      saved_success: 'सफलतापूर्वक सहेज लिया गया!',
      undo: 'वापस लें',
      yes: 'हाँ',
      no: 'नहीं',
      listen: 'सुनें',
      speak_to_type: 'बोलकर लिखें...',
      welcome_worker: 'नमस्ते, सुनील पात्रा (फील्ड कार्यकर्ता)',
      welcome_admin: 'नमस्ते, विक्रम रेड्डी (प्रशासक)',
      help_dashboard: 'यह आपका मुख्य पृष्ठ है। आज की हाजिरी लगाने के लिए बड़ा हरा बटन दबाएं, या रिकॉर्ड लिखने के लिए नीला बटन दबाएं।',
      help_format_entry: 'एक-एक करके आसान सवालों के जवाब दें। सवाल सुनने के लिए स्पीकर दबाएं, या बोलकर जवाब देने के लिए माइक दबाएं।',
      help_attendance: 'अपनी हाजिरी लगाने के लिए हरा बटन दबाएं। आपका स्थान (GPS) अपने आप जुड़ जाएगा।',
      help_finance: 'यहाँ आप अपने आने-जाने के खर्चे जोड़ सकते हैं और महीने की तनख्वाह देख सकते हैं।',
      help_approvals: 'अपनी टीम के आवेदनों को देखें। एक क्लिक में मंजूरी देने के लिए हरे निशान पर दबाएं।'
    },
    te: {
      home: 'హోమ్ (ప్రధానం)',
      help: 'సహాయం',
      dark: 'డార్క్ మోడ్',
      light: 'లైట్ మోడ్',
      punch_in: 'హాజరు వేయండి (పంచ్ ఇన్)',
      punch_out: 'పని ముగింపు (పంచ్ అవుట్)',
      add_record: 'కొత్త రికార్డ్ నమోదు',
      apply_leave: 'సెలవు దరఖాస్తు',
      expenses: 'ఖర్చులు',
      approvals: 'ఆమోదాలు',
      save: 'సేవ్ చేసి సమర్పించండి',
      saved_success: 'విజయవంతంగా సేవ్ చేయబడింది!',
      undo: 'రద్దు చేయండి',
      yes: 'అవును',
      no: 'కాదు',
      listen: 'వినండి',
      speak_to_type: 'మాట్లాడండి...',
      welcome_worker: 'స్వాగతం, సునీల్ పాత్రో (ఫీల్డ్ వర్కర్)',
      welcome_admin: 'స్వాగతం, విక్రమ్ రెడ్డి (అడ్మిన్)',
      help_dashboard: 'ఇది మీ ప్రధాన పేజీ. నేటి హాజరు నమోదు చేయడానికి పెద్ద ఆకుపచ్చ బటన్‌ను నొక్కండి లేదా రికార్డ్ నమోదుకు నీలి బటన్ నొక్కండి.',
      help_format_entry: 'ఒక్కొక్క ప్రశ్నను సులభంగా పూర్తి చేయండి. ప్రశ్న వినడానికి స్పీకర్ లేదా సమాధానం చెప్పడానికి మైక్ నొక్కండి.',
      help_attendance: 'మీ హాజరును గుర్తించడానికి ఆకుపచ్చ బటన్‌ను నొక్కండి. మీ GPS స్థానం స్వయంచాలకంగా నమోదు అవుతుంది.',
      help_finance: 'ఇక్కడ మీరు మీ ప్రయాణ ఖర్చులను నమోదు చేయవచ్చు మరియు నెలవారీ జీతం స్లిప్ చూడవచ్చు.',
      help_approvals: 'మీ బృందం దరఖాస్తులను సమీక్షించండి. ఒక క్లిక్‌తో ఆమోదించడానికి ఆకుపచ్చ టిక్ నొక్కండి.'
    }
  };

  // 2. Complete System Directory for Omnisearch & Navigation
  const SYSTEM_DIRECTORY = [
    // Core & Workspace
    { title: 'Dashboard', sub: 'Home, daily quick actions & alerts', url: 'dashboard.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house "  aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>' },
    { title: 'Formats Hub (/formats)', sub: 'Universal forms directory & entry', url: 'formats-hub.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list "  aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>' },
    { title: 'Format Record Entry', sub: 'Step-by-step low-literacy data form', url: 'format-record-entry.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus-2 "  aria-hidden="true"><path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M14 19h6"></path><path d="M17 16v6"></path></svg>' },
    { title: 'Format Records Data Grid', sub: 'View submitted data & verify', url: 'format-records-grid.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-2 "  aria-hidden="true"><path d="M3 9h18"></path><path d="M9 3v18"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg>' },
    { title: 'Format Groups Manager', sub: 'Create multi-form bundles with duration', url: 'format-groups.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers "  aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>' },
    { title: 'Format Assignments Matrix', sub: 'Assign specific forms to staff', url: 'employee-format-assignments.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round "  aria-hidden="true"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>' },

    // Attendance & Work
    { title: 'Daily Attendance & GPS Check-In', sub: '1-click punch in with location', url: 'attendance.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin "  aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>' },
    { title: 'Monthly Attendance Register', sub: 'Timesheets, shifts & monthly calendar', url: 'attendance-monthly.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days "  aria-hidden="true"><path d="M8 2v3"></path><path d="M16 2v3"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M8 13h.01"></path><path d="M12 13h.01"></path><path d="M16 13h.01"></path><path d="M8 17h.01"></path><path d="M12 17h.01"></path><path d="M16 17h.01"></path></svg>' },
    { title: 'Field Visits Log', sub: 'School & village site check-ins', url: 'field-visits.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-school "  aria-hidden="true"><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M18 4.933V21"></path><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"></path><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"></path><path d="M6 4.933V21"></path><circle cx="12" cy="9" r="2"></circle></svg>' },

    // Leave & HR
    { title: 'Apply for Leave', sub: 'Casual, sick & earned leave wizard', url: 'leave-apply.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palmtree "  aria-hidden="true"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></svg>' },
    { title: 'Leave Balances & Holidays', sub: 'View quota & public holiday list', url: 'leave-balances.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days "  aria-hidden="true"><path d="M8 2v3"></path><path d="M16 2v3"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M8 13h.01"></path><path d="M12 13h.01"></path><path d="M16 13h.01"></path><path d="M8 17h.01"></path><path d="M12 17h.01"></path><path d="M16 17h.01"></path></svg>' },
    { title: 'People & HR Overview', sub: 'Workforce dashboard & metrics', url: 'people-overview.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users "  aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>' },
    { title: 'Staff Directory', sub: 'Employee contacts & supervisor links', url: 'staff-directory.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open "  aria-hidden="true"><path d="M12 5v16"></path><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path></svg>' },
    { title: 'Add New Employee Wizard', sub: 'Onboard staff, assign role & manager', url: 'employee-add.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus "  aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>' },
    { title: 'Edit Employee Profile', sub: 'Update department, role & work area', url: 'employee-edit.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-pen "  aria-hidden="true"><path d="M11.5 15H7a4 4 0 0 0-4 4v2"></path><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path><circle cx="10" cy="7" r="4"></circle></svg>' },
    { title: 'Employee Details View', sub: 'View full staff record & assignments', url: 'employee-details.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user "  aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' },
    { title: 'Employee Onboarding & Docs', sub: 'Upload Aadhaar, ID & verify checklist', url: 'employee-onboarding.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip "  aria-hidden="true"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>' },
    { title: 'Employee Deactivation', sub: 'Offboard employee & preserve data', url: 'employee-deactivate.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-x "  aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="17" x2="22" y1="8" y2="13"></line><line x1="22" x2="17" y1="8" y2="13"></line></svg>' },
    { title: 'Roles & Permissions Matrix', sub: 'Configure 9 system roles & scopes', url: 'users-roles.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check "  aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>' },

    // Finance & Accounts
    { title: 'Finance Overview', sub: 'Budgets vs actuals & programme spend', url: 'finance-overview.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee "  aria-hidden="true"><path d="M6 3h12"></path><path d="M6 8h12"></path><path d="m6 13 8.5 8"></path><path d="M6 13h3"></path><path d="M9 13c6.667 0 6.667-10 0-10"></path></svg>' },
    { title: 'Budgets & Allocations', sub: 'Project budget lines & funding limits', url: 'finance-budgets.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3 "  aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>' },
    { title: 'Record Expense', sub: 'Log travel, food & receipt photo snap', url: 'finance-expenses.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt "  aria-hidden="true"><path d="M12 17V7"></path><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"></path><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path></svg>' },
    { title: 'Staff Claims & Per Diem', sub: 'Reimbursement queue & status', url: 'finance-claims.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card "  aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line><path d="M6 14h2"></path></svg>' },
    { title: 'Payments & Disbursements', sub: 'Vendor payments & bank references', url: 'finance-payments.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark "  aria-hidden="true"><path d="M10 18v-7"></path><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>' },
    { title: 'Invoices & Billing', sub: 'Donor billing documents & files', url: 'finance-invoices.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text "  aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>' },
    { title: 'Grants & Donor Funds', sub: 'Foundation grants & donor utilization', url: 'finance-grants.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins "  aria-hidden="true"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg>' },
    { title: 'Payroll & Salary Slips', sub: 'Monthly payslip & salary transfer', url: 'finance-payroll.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet "  aria-hidden="true"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>' },
    { title: 'Financial Ledger & Reports', sub: 'Ledger transactions & 1-click export', url: 'finance-reports.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3 "  aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>' },

    // Assets, Procurement & Beneficiaries
    { title: 'Assets & Equipment Inventory', sub: 'Tablets, computer labs & medical kits', url: 'assets-inventory.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop "  aria-hidden="true"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>' },
    { title: 'Procurement & Purchase Orders', sub: 'Quotes, POs & goods delivery', url: 'procurement.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart "  aria-hidden="true"><path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"></path><path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"></path><circle cx="18" cy="20" r="2"></circle><circle cx="8" cy="20" r="2"></circle></svg>' },
    { title: 'Beneficiaries Directory', sub: 'Search child & community records', url: 'beneficiaries-directory.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baby "  aria-hidden="true"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M15 12h.01"></path><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path><path d="M9 12h.01"></path></svg>' },
    { title: 'Register New Beneficiary', sub: 'Enroll student, child or elderly person', url: 'beneficiary-add.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard "  aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>' },
    { title: 'Facilities & Training Batches', sub: 'SkillEd centers & community hubs', url: 'batches-facilities.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building "  aria-hidden="true"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect x="4" y="2" width="16" height="20" rx="2"></rect></svg>' },

    // Delivery & Structure
    { title: 'Organisation Modules & Pillars', sub: 'Governance structure & foundation', url: 'organisation.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark "  aria-hidden="true"><path d="M10 18v-7"></path><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>' },
    { title: 'Organisation Settings', sub: 'Foundation profile & donor logos', url: 'organisation-settings.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings "  aria-hidden="true"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>' },
    { title: 'Interventions Hub', sub: 'HerEcho, Spectrum, SkillEd, CareS', url: 'interventions.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>' },
    { title: 'Field Programmes Directory', sub: 'Operational projects & districts', url: 'programmes.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sprout "  aria-hidden="true"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>' },
    { title: 'Activities (Thematic Areas)', sub: 'School program, skilling & checkups', url: 'activities.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pin "  aria-hidden="true"><path d="M12 17v5"></path><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path></svg>' },
    { title: 'Sub-Activities List', sub: 'Dropout follow-up & counseling', url: 'sub-activities.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark "  aria-hidden="true"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path></svg>' },

    // Approvals, Drive & Comms
    { title: 'Approvals Unified Inbox', sub: '1-click review of leaves, spend & MIS', url: 'approvals.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg>' },
    { title: 'Workflow Builder', sub: 'Configure approval chains & tiers', url: 'workflow-builder.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-branch "  aria-hidden="true"><path d="M15 6a9 9 0 0 0-9 9V3"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle></svg>' },
    { title: 'Cloud Drive & File Folders', sub: 'Intervention documents & storage', url: 'drive.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder "  aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>' },
    { title: 'Central Documents Repository', sub: 'Policies, ID proofs & blank forms', url: 'documents.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text "  aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>' },
    { title: 'MIS Trackers & Targets', sub: 'Indicators, reporting periods & data', url: 'mis.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>' },
    { title: 'Reports & Indicator Analytics', sub: 'Consolidated outreach & charts', url: 'reports.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3 "  aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>' },
    { title: 'Public Shared Report', sub: 'Donor view with secure access token', url: 'reports-shared.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share-2 "  aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>' },
    { title: 'Team Announcements', sub: 'Broadcast notices & audio bulletins', url: 'announcements.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-megaphone "  aria-hidden="true"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>' },
    { title: 'Notification Centre', sub: 'System alerts & reminders', url: 'notifications.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell "  aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>' },
    { title: 'Review Meetings Calendar', sub: 'Field agendas & action items', url: 'meetings.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days "  aria-hidden="true"><path d="M8 2v3"></path><path d="M16 2v3"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M8 13h.01"></path><path d="M12 13h.01"></path><path d="M16 13h.01"></path><path d="M8 17h.01"></path><path d="M12 17h.01"></path><path d="M16 17h.01"></path></svg>' },
    { title: 'Meeting Room Window', sub: 'Dedicated room & live transcript', url: 'meeting-room.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video "  aria-hidden="true"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>' },
    { title: 'Volunteers Roster', sub: 'Community helpers & drive hours', url: 'volunteers.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins "  aria-hidden="true"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg>' },

    // Admin, Security & Setup
    { title: 'Audit Trail & Activity Log', sub: 'Timestamped security event log', url: 'audit-log.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history "  aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>' },
    { title: 'Offline Sync Centre', sub: 'Network status & outbox queue', url: 'sync-centre.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw "  aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>' },
    { title: 'System Settings', sub: 'Display mode, language & sync limits', url: 'settings.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings "  aria-hidden="true"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>' },
    { title: 'My User Profile', sub: 'Personal account & voice preferences', url: 'profile.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user "  aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' },
    { title: 'Global Omnisearch View', sub: 'Search all records & files', url: 'search-results.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search "  aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>' },
    { title: '18-Journey Click Audit Table', sub: 'Before/after click & eco savings', url: 'audit-table.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-down "  aria-hidden="true"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>' },
    { title: 'Click Path Simulator', sub: 'Side-by-side 8-hop vs 1-click test', url: 'click-comparison.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap "  aria-hidden="true"><path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"></path></svg>' },
    { title: 'Prototype Portal & Sitemap', sub: 'Master entry point to all 62 screens', url: 'index.html', cat: 'page', icon: '<i class="fa-solid fa-sitemap "  aria-hidden="true"></i>' },
    { title: 'Sign In Screen', sub: 'Staff authentication & 1-click test', url: 'login.html', cat: 'page', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round "  aria-hidden="true"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>' }
  ];

  // 3. Web Speech Text-to-Speech Engine (Read Aloud)
  window.speak = function (text, lang) {
    if (!('speechSynthesis' in window)) {
      alert('Audio: ' + text);
      return;
    }
    window.speechSynthesis.cancel();
    const currentLang = lang || localStorage.getItem('coheart_lang') || 'en';
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95; // Slightly slower for clear non-tech understanding
    utterance.pitch = 1.0;

    if (currentLang === 'hi') {
      utterance.lang = 'hi-IN';
    } else if (currentLang === 'te') {
      utterance.lang = 'te-IN';
    } else {
      utterance.lang = 'en-IN';
    }
    window.speechSynthesis.speak(utterance);
  };

  // Screen Help Spoken Guide
  window.speakScreenHelp = function (screenKey) {
    const lang = localStorage.getItem('coheart_lang') || 'en';
    const dict = I18N[lang] || I18N.en;
    const text = dict['help_' + screenKey] || dict.help_dashboard;
    window.speak(text, lang);
  };

  // 4. Voice Input (Microphone Speech-to-Text)
  window.startVoiceInput = function (targetInputId, btnEl) {
    const input = document.getElementById(targetInputId);
    if (!input) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      const simulated = prompt('Microphone speech simulation (Enter dictated words):', input.value || 'Radhika Kumari');
      if (simulated !== null) {
        input.value = simulated;
        window.speak('Recorded: ' + simulated);
        input.dispatchEvent(new Event('input'));
      }
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      const lang = localStorage.getItem('coheart_lang') || 'en';
      recognition.lang = lang === 'hi' ? 'hi-IN' : (lang === 'te' ? 'te-IN' : 'en-IN');
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      if (btnEl) btnEl.classList.add('listening');

      recognition.onstart = function () {
        input.placeholder = (I18N[lang] || I18N.en).speak_to_type;
      };

      recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        input.value = transcript;
        window.speak('Recorded: ' + transcript, lang);
        input.dispatchEvent(new Event('input'));
      };

      recognition.onerror = function () {
        if (btnEl) btnEl.classList.remove('listening');
      };

      recognition.onend = function () {
        if (btnEl) btnEl.classList.remove('listening');
      };

      recognition.start();
    } catch (e) {
      console.warn('SpeechRecognition error:', e);
    }
  };

  // 5. Language Switching Engine
  window.setLanguage = function (lang) {
    localStorage.setItem('coheart_lang', lang);
    applyLanguage(lang);
  };

  function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;

    // Update Language Pills
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update Elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.innerText = dict[key];
    });

    // Update Role Headings if present
    const role = localStorage.getItem('coheart_user_role') || 'employee';
    const welcomeEl = document.getElementById('welcome-user-text');
    if (welcomeEl) {
      welcomeEl.innerText = role === 'admin' ? dict.welcome_admin : dict.welcome_worker;
    }
  }

  // 6. Dark Theme
  window.toggleDarkMode = function () {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('coheart_dark_mode', isDark);
    updateDarkIcons(isDark);
  };

  function updateDarkIcons(isDark) {
    document.querySelectorAll('#dark-icon').forEach(icon => {
      icon.innerHTML = isDark
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun "  aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon "  aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>';
    });
    const lang = localStorage.getItem('coheart_lang') || 'en';
    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll('#dark-text').forEach(t => {
      t.innerText = isDark ? dict.light : dict.dark;
    });
  }

  // 7. Role Switcher
  window.switchRole = function (role) {
    localStorage.setItem('coheart_user_role', role);
    applyRoleUI(role);
  };

  function applyRoleUI(role) {
    document.querySelectorAll('#btn-employee').forEach(b => b.classList.toggle('active', role === 'employee'));
    document.querySelectorAll('#btn-admin').forEach(b => b.classList.toggle('active', role === 'admin'));

    document.querySelectorAll('.admin-only').forEach(el => {
      el.style.display = role === 'admin' ? '' : 'none';
    });
    document.querySelectorAll('.employee-only').forEach(el => {
      el.style.display = role === 'employee' ? '' : 'none';
    });

    const lang = localStorage.getItem('coheart_lang') || 'en';
    const dict = I18N[lang] || I18N.en;
    const welcomeEl = document.getElementById('welcome-user-text');
    if (welcomeEl) {
      welcomeEl.innerText = role === 'admin' ? dict.welcome_admin : dict.welcome_worker;
    }
  }

  // 8. Instant Toast Notification & Undo
  window.showToast = function (message, type = 'success') {
    const existing = document.querySelector('.toast-msg');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    if (type === 'error') {
      toast.style.background = '#991b1b';
      toast.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert " style="margin-right: 6px;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg> <span>${message}</span>`;
    } else {
      toast.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check " style="margin-right: 6px;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg> <span>${message}</span> <button class="btn btn-sm btn-outline" style="padding: 2px 8px; color: white; border-color: rgba(255,255,255,0.4);" onclick="this.parentElement.remove()"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-undo-2 " style="margin-right: 4px;" aria-hidden="true"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg> Undo</button>`;
    }

    document.body.appendChild(toast);
    window.speak(message);

    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 4000);
  };

  // 9. Modal Control
  window.openModal = function (id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('open');
  };

  window.closeModal = function (id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('open');
  };

  // 10. Universal Injected Command Palette (Ctrl+K)
  function ensureCommandPalette() {
    if (document.getElementById('cmd-palette')) return;

    const overlay = document.createElement('div');
    overlay.className = 'cmd-overlay';
    overlay.id = 'cmd-palette';
    overlay.onclick = function (e) {
      if (e.target === overlay) window.closeCommandPalette();
    };

    overlay.innerHTML = `
      <div class="cmd-box">
        <div class="cmd-input-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search " style="color: var(--text-faint); margin-right: 8px;" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
          <input
            type="text"
            id="cmd-search-input"
            class="cmd-input"
            placeholder="Type page name, module or action... (Esc to close)"
            autocomplete="off"
          />
          <span class="cmd-key" style="cursor: pointer;" onclick="closeCommandPalette()">ESC</span>
        </div>
        <div class="cmd-tabs">
          <button class="cmd-tab active" data-tab="all" onclick="filterCmdTab('all', this)">All (62)</button>
          <button class="cmd-tab" data-tab="page" onclick="filterCmdTab('page', this)"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text " style="margin-right: 4px;" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Pages</button>
          <button class="cmd-tab" data-tab="action" onclick="filterCmdTab('action', this)"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap " style="margin-right: 4px;" aria-hidden="true"><path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"></path></svg> Actions</button>
        </div>
        <div class="cmd-results" id="cmd-results-list"></div>
        <div class="cmd-footer">
          <div>Use <span class="cmd-key"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up "  aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></span> <span class="cmd-key"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down "  aria-hidden="true"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg></span> and <span class="cmd-key">Enter</span> &bull; Click any item to jump</div>
          <div>CoHeart Instant Directory &bull; Zero network lag</div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const input = document.getElementById('cmd-search-input');
    input.addEventListener('input', () => renderCmdResults(input.value));
    input.addEventListener('keydown', handleCmdKeyboard);
  }

  let activeTab = 'all';
  window.filterCmdTab = function (tab, btn) {
    activeTab = tab;
    document.querySelectorAll('.cmd-tab').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const input = document.getElementById('cmd-search-input');
    renderCmdResults(input ? input.value : '');
  };

  function renderCmdResults(query) {
    const list = document.getElementById('cmd-results-list');
    if (!list) return;

    const q = (query || '').toLowerCase().trim();
    const filtered = SYSTEM_DIRECTORY.filter(item => {
      const matchCat = activeTab === 'all' || item.cat === activeTab;
      const matchText = !q || item.title.toLowerCase().includes(q) || item.sub.toLowerCase().includes(q);
      return matchCat && matchText;
    });

    if (filtered.length === 0) {
      list.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 14px;">
          No matching pages found for "${query}".
          <div style="margin-top: 10px;">
            <a href="search-results.html?q=${encodeURIComponent(query)}" class="btn btn-outline">
              Open Full Search Results <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right " style="margin-left: 4px;" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      `;
      return;
    }

    list.innerHTML = filtered.map((item, idx) => `
      <a href="${item.url}" class="cmd-item ${idx === 0 ? 'selected' : ''}" data-idx="${idx}">
        <div class="cmd-item-left">
          <div class="cmd-item-icon">${item.icon}</div>
          <div>
            <div class="cmd-item-title">${item.title}</div>
            <div class="cmd-item-sub">${item.sub}</div>
          </div>
        </div>
        <span class="badge ${item.cat === 'action' ? 'badge-success' : 'badge-info'}">${item.cat}</span>
      </a>
    `).join('');
  }

  let selectedIdx = 0;
  function handleCmdKeyboard(e) {
    const items = document.querySelectorAll('#cmd-results-list .cmd-item');
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIdx = (selectedIdx + 1) % items.length;
      updateCmdSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIdx = (selectedIdx - 1 + items.length) % items.length;
      updateCmdSelection(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = items[selectedIdx];
      if (target) window.location.href = target.getAttribute('href');
    }
  }

  function updateCmdSelection(items) {
    items.forEach((it, idx) => {
      it.classList.toggle('selected', idx === selectedIdx);
      if (idx === selectedIdx) it.scrollIntoView({ block: 'nearest' });
    });
  }

  window.openCommandPalette = function () {
    ensureCommandPalette();
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
    const palette = document.getElementById('cmd-palette');
    if (!palette) return;
    palette.classList.add('open');
    const input = document.getElementById('cmd-search-input');
    if (input) {
      input.value = '';
      input.focus();
    }
    selectedIdx = 0;
    renderCmdResults('');
  };

  window.closeCommandPalette = function () {
    const palette = document.getElementById('cmd-palette');
    if (palette) palette.classList.remove('open');
  };

  // Keyboard Shortcuts (Ctrl+K and Escape)
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const palette = document.getElementById('cmd-palette');
      if (palette && palette.classList.contains('open')) {
        window.closeCommandPalette();
      } else {
        window.openCommandPalette();
      }
    }
    if (e.key === 'Escape') {
      window.closeCommandPalette();
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    }
  });

  // Initialization on DOM Ready
  document.addEventListener('DOMContentLoaded', function () {
    const isDark = localStorage.getItem('coheart_dark_mode') === 'true';
    if (isDark) document.body.classList.add('dark-theme');
    updateDarkIcons(isDark);

    const lang = localStorage.getItem('coheart_lang') || 'en';
    applyLanguage(lang);

    const role = localStorage.getItem('coheart_user_role') || 'employee';
    applyRoleUI(role);

    ensureCommandPalette();

    // Bind search bars to open Command Palette
    document.querySelectorAll('.omnisearch-box, .omnisearch-input, [data-open-cmd]').forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        window.openCommandPalette();
      });
    });

    // Mobile Sidebar Drawer Control & Scroll Lock
    window.toggleMobileSidebar = function (open) {
      const sidebar = document.querySelector('.sidebar');
      const backdrop = document.querySelector('.sidebar-backdrop');
      if (!sidebar) return;

      const isOpen = open !== undefined ? open : !sidebar.classList.contains('drawer-open');
      sidebar.classList.toggle('drawer-open', isOpen);
      if (backdrop) backdrop.classList.toggle('active', isOpen);
      document.body.classList.toggle('drawer-locked', isOpen);
    };

    function ensureSidebarBackdrop() {
      if (document.querySelector('.sidebar-backdrop')) return;
      const bd = document.createElement('div');
      bd.className = 'sidebar-backdrop';
      bd.onclick = function () {
        window.toggleMobileSidebar(false);
      };
      document.body.appendChild(bd);
    }

    ensureSidebarBackdrop();

    // Auto-scroll active sidebar item into view on load
    function scrollActiveSidebarItemIntoView() {
      const activeLink = document.querySelector('.sidebar .sidebar-link.active');
      if (activeLink) {
        // Use requestAnimationFrame to ensure layout is computed
        requestAnimationFrame(() => {
          activeLink.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' });
        });
      }
    }

    scrollActiveSidebarItemIntoView();

    // Close mobile drawer when clicking a link inside it on mobile
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
          window.toggleMobileSidebar(false);
        }
      });
    });

    // Auto-bind read-aloud buttons
    document.querySelectorAll('[data-speak]').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const text = btn.getAttribute('data-speak');
        if (text) window.speak(text);
      });
    });
  });

})();
