/**
 * data/expenseData.js
 * -------------------
 * Simulated "backend" data for the Medical & Travel Expense Request form.
 *
 * Two independent datasets are exposed so the demo can switch between them
 * (?dataset=1 / ?dataset=2). No data entry happens on screen — everything
 * rendered by the Pug template comes from this module.
 *
 * Each dataset follows the SAME generic shape:
 *   {
 *     claimant, claimNo, workerAppId, submittedAt,
 *     sections: [ { id, title, note?, columns:[{label,key}], rows:[{...}] } ]
 *   }
 * Because every table is described by `columns` + `rows`, ONE reusable
 * Pug mixin (+dataTable) can render all six sections of the form.
 */

// Column definitions are declared once and shared by both datasets (reusability).
const SECTION_DEFS = [
  {
    id: 'prescription',
    title: 'Prescription Drugs',
    columns: [
      { label: 'Drug Name', key: 'drugName' },
      { label: 'Prescription Date', key: 'prescriptionDate' },
      { label: 'Date Purchased', key: 'datePurchased' },
      { label: 'Healthcare Provider Name', key: 'providerName' },
      { label: 'Paid Amount', key: 'paidAmount', align: 'right' }
    ]
  },
  {
    id: 'otc',
    title: 'Over-the-Counter Drugs',
    columns: [
      { label: 'Drug Name', key: 'drugName' },
      { label: 'Date Purchased', key: 'datePurchased' },
      { label: 'Paid Amount', key: 'paidAmount', align: 'right' },
      { label: "Seller's Name", key: 'sellerName' },
      { label: 'Reason for Purchasing', key: 'reason' }
    ]
  },
  {
    id: 'supplies',
    title: 'Bandages, Braces or Other Medical Supplies',
    columns: [
      { label: 'Item Purchased', key: 'itemPurchased' },
      { label: 'Date Purchased', key: 'datePurchased' },
      { label: 'Was this Prescribed?', key: 'wasPrescribed' },
      { label: 'Healthcare Provider Name', key: 'providerName' },
      { label: 'Paid Amount', key: 'paidAmount', align: 'right' },
      { label: "Seller's Name", key: 'sellerName' }
    ]
  },
  {
    id: 'parking',
    title: 'Parking for Medical Appointments',
    columns: [
      { label: 'Address of Healthcare Provider/Medical Facility', key: 'address' },
      { label: 'Date', key: 'date' },
      { label: 'Paid Amount', key: 'paidAmount', align: 'right' },
      { label: 'Meter Used?', key: 'meterUsed' },
      { label: 'Meter Number', key: 'meterNumber' }
    ]
  },
  {
    id: 'mileage',
    title: 'Mileage to Medical Appointments',
    note: 'The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work.',
    columns: [
      { label: 'Appointment Date', key: 'appointmentDate' },
      { label: 'Address of Healthcare Provider/Medical Facility', key: 'providerAddress' },
      { label: 'Address of Workplace', key: 'workplaceAddress' },
      { label: 'Number of km (Round Trip)', key: 'km', align: 'right' }
    ]
  },
  {
    id: 'fare',
    title: 'Bus or Taxi Fare for Medical Appointments',
    asterisk: true,
    note: '*Note: Pre-approval is required from your WCB representative to claim taxi fare(s).',
    columns: [
      { label: 'Appointment Date', key: 'appointmentDate' },
      { label: 'Address of Starting Point', key: 'startAddress' },
      { label: 'Address of Healthcare Provider/Medical Facility', key: 'providerAddress' },
      { label: 'Bus or Taxi (indicate one)', key: 'busOrTaxi' },
      { label: 'Total Fare Paid', key: 'totalFare', align: 'right' }
    ]
  }
];

/** Helper: merge shared section definitions with dataset-specific rows. */
function buildSections(rowsById) {
  return SECTION_DEFS.map(def => ({ ...def, rows: rowsById[def.id] || [] }));
}

/* ------------------------------------------------------------------ */
/* DATASET 1 — small dataset (original PDF values)                     */
/* ------------------------------------------------------------------ */
const dataset1 = {
  claimant: 'Madeleine Willson',
  claimNo: '20042047',
  workerAppId: '712041',
  submittedAt: 'March 28, 2024 20:43',
  sections: buildSections({
    prescription: [
      { drugName: 'Naproxen', prescriptionDate: 'February 28, 2024', datePurchased: 'February 29, 2024', providerName: 'Dr. Best', paidAmount: '$20.00' }
    ],
    otc: [
      { drugName: 'Advil', datePurchased: 'March 28, 2024', paidAmount: '$8.00', sellerName: 'Shoppers Drug Mart', reason: 'Pain' }
    ],
    supplies: [
      { itemPurchased: 'Tensor', datePurchased: 'February 28, 2024', wasPrescribed: 'Yes', providerName: 'Dr. Best', paidAmount: '$10.00', sellerName: 'Shoppers Drug Mart' }
    ],
    parking: [
      { address: '333 St Mary Ave, Winnipeg MB R3C 4A5, Canada', date: 'March 28, 2024', paidAmount: '$10.00', meterUsed: 'Yes', meterNumber: '12245' }
    ],
    mileage: [
      { appointmentDate: 'March 28, 2024', providerAddress: 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', workplaceAddress: 'WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada', km: '20 km' }
    ],
    fare: [
      { appointmentDate: 'March 28, 2024', startAddress: '—', providerAddress: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", busOrTaxi: 'Bus', totalFare: '$3.00' },
      { appointmentDate: 'March 27, 2024', startAddress: '25 Furby St, Winnipeg MB R3C 2A2, Canada', providerAddress: '440 Edmonton St, Winnipeg MB R3B 2M4, Canada', busOrTaxi: 'Taxi', totalFare: '$15.00' }
    ]
  })
};

/* ------------------------------------------------------------------ */
/* DATASET 2 — larger dataset (stress-tests A4 pagination & footer)    */
/* ------------------------------------------------------------------ */
const dataset2 = {
  claimant: 'Robert Chen',
  claimNo: '20051188',
  workerAppId: '845772',
  submittedAt: 'June 14, 2024 09:12',
  sections: buildSections({
    prescription: [
      { drugName: 'Cyclobenzaprine', prescriptionDate: 'May 2, 2024', datePurchased: 'May 3, 2024', providerName: 'Dr. Sharma', paidAmount: '$34.50' },
      { drugName: 'Diclofenac Gel', prescriptionDate: 'May 2, 2024', datePurchased: 'May 4, 2024', providerName: 'Dr. Sharma', paidAmount: '$27.99' },
      { drugName: 'Tramadol', prescriptionDate: 'May 20, 2024', datePurchased: 'May 20, 2024', providerName: 'Dr. Osei', paidAmount: '$41.75' },
      { drugName: 'Pantoprazole', prescriptionDate: 'May 20, 2024', datePurchased: 'May 21, 2024', providerName: 'Dr. Osei', paidAmount: '$18.20' }
    ],
    otc: [
      { drugName: 'Tylenol Extra Strength', datePurchased: 'May 5, 2024', paidAmount: '$12.49', sellerName: 'Walmart Pharmacy', reason: 'Back pain' },
      { drugName: 'Voltaren Emulgel', datePurchased: 'May 12, 2024', paidAmount: '$19.99', sellerName: 'Rexall', reason: 'Muscle inflammation' },
      { drugName: 'Robaxacet', datePurchased: 'June 1, 2024', paidAmount: '$15.29', sellerName: 'Shoppers Drug Mart', reason: 'Muscle spasm' }
    ],
    supplies: [
      { itemPurchased: 'Lumbar Support Brace', datePurchased: 'May 6, 2024', wasPrescribed: 'Yes', providerName: 'Dr. Sharma', paidAmount: '$65.00', sellerName: 'Wellness Medical Supply' },
      { itemPurchased: 'Cold/Hot Gel Pack', datePurchased: 'May 6, 2024', wasPrescribed: 'No', providerName: '—', paidAmount: '$14.99', sellerName: 'Walmart' },
      { itemPurchased: 'Kinesiology Tape', datePurchased: 'May 22, 2024', wasPrescribed: 'Yes', providerName: 'Prairie Physio Clinic', paidAmount: '$21.50', sellerName: 'Sport Chek' }
    ],
    parking: [
      { address: '820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', date: 'May 3, 2024', paidAmount: '$8.50', meterUsed: 'Yes', meterNumber: '30871' },
      { address: '820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', date: 'May 20, 2024', paidAmount: '$8.50', meterUsed: 'Yes', meterNumber: '30871' },
      { address: '1075 Portage Ave, Winnipeg MB R3G 0R8, Canada', date: 'May 27, 2024', paidAmount: '$6.00', meterUsed: 'No', meterNumber: '—' },
      { address: '1075 Portage Ave, Winnipeg MB R3G 0R8, Canada', date: 'June 3, 2024', paidAmount: '$6.00', meterUsed: 'No', meterNumber: '—' },
      { address: '1075 Portage Ave, Winnipeg MB R3G 0R8, Canada', date: 'June 10, 2024', paidAmount: '$6.00', meterUsed: 'No', meterNumber: '—' }
    ],
    mileage: [
      { appointmentDate: 'May 3, 2024', providerAddress: 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', workplaceAddress: '1550 Inkster Blvd, Winnipeg MB R2X 1R1, Canada', km: '26 km' },
      { appointmentDate: 'May 20, 2024', providerAddress: 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', workplaceAddress: '1550 Inkster Blvd, Winnipeg MB R2X 1R1, Canada', km: '26 km' },
      { appointmentDate: 'May 27, 2024', providerAddress: 'Prairie Physio Clinic, 1075 Portage Ave, Winnipeg MB, Canada', workplaceAddress: '1550 Inkster Blvd, Winnipeg MB R2X 1R1, Canada', km: '18 km' },
      { appointmentDate: 'June 3, 2024', providerAddress: 'Prairie Physio Clinic, 1075 Portage Ave, Winnipeg MB, Canada', workplaceAddress: '1550 Inkster Blvd, Winnipeg MB R2X 1R1, Canada', km: '18 km' },
      { appointmentDate: 'June 10, 2024', providerAddress: 'Prairie Physio Clinic, 1075 Portage Ave, Winnipeg MB, Canada', workplaceAddress: '1550 Inkster Blvd, Winnipeg MB R2X 1R1, Canada', km: '18 km' }
    ],
    fare: [
      { appointmentDate: 'May 10, 2024', startAddress: '77 Redwood Ave, Winnipeg MB R2W 5J5, Canada', providerAddress: 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', busOrTaxi: 'Bus', totalFare: '$3.15' },
      { appointmentDate: 'May 17, 2024', startAddress: '77 Redwood Ave, Winnipeg MB R2W 5J5, Canada', providerAddress: 'Prairie Physio Clinic, 1075 Portage Ave, Winnipeg MB, Canada', busOrTaxi: 'Taxi', totalFare: '$18.40' },
      { appointmentDate: 'June 7, 2024', startAddress: '77 Redwood Ave, Winnipeg MB R2W 5J5, Canada', providerAddress: '440 Edmonton St, Winnipeg MB R3B 2M4, Canada', busOrTaxi: 'Bus', totalFare: '$3.15' }
    ]
  })
};

// Export as a lookup so the route can do expenseData[datasetId].
module.exports = { 1: dataset1, 2: dataset2 };
