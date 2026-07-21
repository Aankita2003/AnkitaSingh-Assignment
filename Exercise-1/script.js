const tableConfigs = {
  prescription: {
    body: document.getElementById('body-prescription'),
    columns: [
      { key: 'drugName', type: 'text', placeholder: 'Drug name' },
      { key: 'prescriptionDate', type: 'text', placeholder: 'Prescription date' },
      { key: 'datePurchased', type: 'text', placeholder: 'Date purchased' },
      { key: 'providerName', type: 'text', placeholder: 'Healthcare provider name' },
      { key: 'paidAmount', type: 'text', placeholder: '$0.00' }
    ],
    starterRows: [
      { drugName: 'Naproxen', prescriptionDate: 'February 28, 2024', datePurchased: 'February 29, 2024', providerName: 'Dr. Best', paidAmount: '$20.00' }
    ]
  },
  otc: {
    body: document.getElementById('body-otc'),
    columns: [
      { key: 'drugName', type: 'text', placeholder: 'Drug name' },
      { key: 'datePurchased', type: 'text', placeholder: 'Date purchased' },
      { key: 'paidAmount', type: 'text', placeholder: '$0.00' },
      { key: 'sellerName', type: 'text', placeholder: "Seller's name" },
      { key: 'reason', type: 'text', placeholder: 'Reason for purchasing' }
    ],
    starterRows: [
      { drugName: 'Advil', datePurchased: 'March 28, 2024', paidAmount: '$8.00', sellerName: 'Shoppers Drug Mart', reason: 'Pain' }
    ]
  },
  supplies: {
    body: document.getElementById('body-supplies'),
    columns: [
      { key: 'itemPurchased', type: 'text', placeholder: 'Item purchased' },
      { key: 'datePurchased', type: 'text', placeholder: 'Date purchased' },
      { key: 'wasPrescribed', type: 'select', options: ['Yes', 'No'] },
      { key: 'providerName', type: 'text', placeholder: 'Healthcare provider name' },
      { key: 'paidAmount', type: 'text', placeholder: '$0.00' },
      { key: 'sellerName', type: 'text', placeholder: "Seller's name" }
    ],
    starterRows: [
      { itemPurchased: 'Tensor', datePurchased: 'February 28, 2024', wasPrescribed: 'Yes', providerName: 'Dr. Best', paidAmount: '$10.00', sellerName: 'Shoppers DrugMart' }
    ]
  },
  parking: {
    body: document.getElementById('body-parking'),
    columns: [
      { key: 'address', type: 'text', placeholder: 'Address of healthcare provider/medical facility' },
      { key: 'date', type: 'text', placeholder: 'Date' },
      { key: 'paidAmount', type: 'text', placeholder: '$0.00' },
      { key: 'meterUsed', type: 'select', options: ['Yes', 'No'] },
      { key: 'meterNumber', type: 'text', placeholder: 'Meter number' }
    ],
    starterRows: [
      { address: '333 St Mary Ave, Winnipeg MB R3C4A5, Canada', date: 'March 28, 2024', paidAmount: '$10.00', meterUsed: 'Yes', meterNumber: '12245' }
    ]
  },
  mileage: {
    body: document.getElementById('body-mileage'),
    columns: [
      { key: 'appointmentDate', type: 'text', placeholder: 'Appointment date' },
      { key: 'providerAddress', type: 'text', placeholder: 'Address of healthcare provider/medical facility' },
      { key: 'workplaceAddress', type: 'text', placeholder: 'Address of workplace' },
      { key: 'km', type: 'text', placeholder: 'Number of km (round trip)' }
    ],
    starterRows: [
      { appointmentDate: 'March 28, 2024', providerAddress: 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', workplaceAddress: 'WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada', km: '20 km' }
    ]
  },
  fare: {
    body: document.getElementById('body-fare'),
    columns: [
      { key: 'appointmentDate', type: 'text', placeholder: 'Appointment date' },
      { key: 'startAddress', type: 'text', placeholder: 'Address of starting point' },
      { key: 'providerAddress', type: 'text', placeholder: 'Address of healthcare provider/medical facility' },
      { key: 'busOrTaxi', type: 'select', options: ['Bus', 'Taxi'] },
      { key: 'totalFare', type: 'text', placeholder: '$0.00' }
    ],
    starterRows: [
      { appointmentDate: 'March 28, 2024', startAddress: '', providerAddress: 'HSC Winnipeg Women\u2019s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada', busOrTaxi: 'Bus', totalFare: '$3.00' },
      { appointmentDate: 'March 27, 2024', startAddress: '25 Furby St, Winnipeg MB R3C2A2, Canada', providerAddress: '440 Edmonton St, Winnipeg MB R3B 2M4, Canada', busOrTaxi: 'Taxi', totalFare: '$15.00' }
    ]
  }
};

function buildCell(column, value) {
  const td = document.createElement('td');
  if (column.type === 'select') {
    const select = document.createElement('select');
    column.options.forEach(opt => {
      const optionEl = document.createElement('option');
      optionEl.value = opt;
      optionEl.textContent = opt;
      select.appendChild(optionEl);
    });
    if (value) select.value = value;
    td.appendChild(select);
  } else {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = column.placeholder || '';
    input.value = value || '';
    td.appendChild(input);
  }
  return td;
}

function addRow(tableKey, values) {
  values = values || {};
  const config = tableConfigs[tableKey];
  const tr = document.createElement('tr');

  config.columns.forEach(column => {
    tr.appendChild(buildCell(column, values[column.key]));
  });

  const removeTd = document.createElement('td');
  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.className = 'row-remove-btn';
  removeBtn.setAttribute('aria-label', 'Remove row');
  removeBtn.textContent = '\u00d7';
  removeBtn.addEventListener('click', () => tr.remove());
  removeTd.appendChild(removeBtn);
  tr.appendChild(removeTd);

  config.body.appendChild(tr);
}

/* Seed each table with its starter row(s) from the original form */
Object.keys(tableConfigs).forEach(key => {
  const config = tableConfigs[key];
  config.starterRows.forEach(row => addRow(key, row));
});

/* Wire up every "+ Add ..." button generically via its data-target attribute */
document.querySelectorAll('.add-row-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    addRow(btn.dataset.target);
  });
});

/* Submit / reset */
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const statusMsg = document.getElementById('status-msg');
const form = document.getElementById('expense-form');

submitBtn.addEventListener('click', () => {
  const agreed = document.getElementById('privacy-agree').checked;
  if (!agreed) {
    alert('Please confirm the Privacy Notice checkbox before submitting.');
    return;
  }
  statusMsg.style.display = 'block';
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitted';
});

resetBtn.addEventListener('click', () => {
  Object.values(tableConfigs).forEach(config => {
    config.body.innerHTML = '';
  });
  Object.keys(tableConfigs).forEach(key => {
    tableConfigs[key].starterRows.forEach(row => addRow(key, row));
  });
  document.getElementById('privacy-agree').checked = true;
  statusMsg.style.display = 'none';
  submitBtn.disabled = false;
  submitBtn.textContent = 'Submit request';
});
