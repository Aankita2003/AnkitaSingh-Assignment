/**
 * data/progressData.js
 * --------------------
 * Simulated "backend" data for the Worker Progress Report form.
 *
 * Two datasets, switchable at runtime (?dataset=1 / ?dataset=2).
 * The template renders every answer read-only from these objects —
 * there is no on-screen data entry.
 */

/* ------------------------------------------------------------------ */
/* DATASET 1 — original PDF values (worker back at work, recovered)    */
/* ------------------------------------------------------------------ */
const dataset1 = {
  claimant: 'Madeleine Willson',
  claimNo: '20042047',
  formCode: 'WP',
  workerAppId: '712041',
  submittedAt: 'March 19, 2024 19:21',

  returnToWork: {
    // Which "Select one" option is chosen: notMissed | notReturned | returned
    missedTime: 'returned',
    returnedOnDate: 'March 15, 2024',
    // Working arrangement checkboxes (multiple may apply)
    working: ['Modified duties, reduced hours'],
    workingOther: '',
    rtwGoing: 'Terrible. Testing Testing',
    expectedReturnDate: '',
    concerns: '',
    employerContact: { name: '', date: '' }
  },

  recovery: {
    recovered: true,                       // fully recovered?
    comments: '',
    painLevel: null,                        // 1..10 or null (not answered)
    receivingTreatment: false,
    treatmentProviderType: '',
    lastTreatmentDate: '',
    lastTreatmentProviderName: '',
    physioFrequency: '',
    takingMedication: false,
    medicationName: '',
    nextTreatmentDate: '',
    doingHomeExercises: null,               // true | false | null
    exercises: ''
  },

  otherInfo: 'No info Testing Testing',
  certified: true
};

/* ------------------------------------------------------------------ */
/* DATASET 2 — still recovering (exercises all the alternate branches) */
/* ------------------------------------------------------------------ */
const dataset2 = {
  claimant: 'Robert Chen',
  claimNo: '20051188',
  formCode: 'WP',
  workerAppId: '845772',
  submittedAt: 'June 14, 2024 09:12',

  returnToWork: {
    missedTime: 'notReturned',
    returnedOnDate: '',
    working: [],
    workingOther: '',
    rtwGoing: 'I have not yet returned to work. My physiotherapist advised waiting until I can lift 10 kg without pain before resuming warehouse duties.',
    expectedReturnDate: 'July 8, 2024',
    concerns: 'My regular role involves repeated heavy lifting. I am concerned that returning without modified duties will re-injure my lower back. I would like a graduated return-to-work plan discussed with my employer.',
    employerContact: { name: 'Sandra Malley (HR Manager)', date: 'June 10, 2024' }
  },

  recovery: {
    recovered: false,
    comments: 'Range of motion has improved noticeably over the last three weeks. Sharp pain has reduced to a dull ache, but mornings are still stiff and prolonged sitting remains difficult.',
    painLevel: 5,
    receivingTreatment: true,
    treatmentProviderType: 'Physiotherapist',
    lastTreatmentDate: 'June 10, 2024',
    lastTreatmentProviderName: 'Prairie Physio Clinic — A. Dhillon',
    physioFrequency: 'Twice a week',
    takingMedication: true,
    medicationName: 'Cyclobenzaprine 10 mg (nightly)',
    nextTreatmentDate: 'June 17, 2024',
    doingHomeExercises: true,
    exercises: 'Pelvic tilts (2 x 15 daily), cat-camel stretches (2 x 10), bird-dog holds (3 x 8 per side), 20-minute walk each morning and evening.'
  },

  otherInfo: 'I have kept all receipts for medication and physiotherapy parking, and will submit them with my Medical & Travel Expense Request. Please contact me on my mobile between 9 am and 5 pm.',
  certified: true
};

// Export as a lookup so the route can do progressData[datasetId].
module.exports = { 1: dataset1, 2: dataset2 };
