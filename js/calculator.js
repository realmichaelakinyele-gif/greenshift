/**
 * GREENSHIFT BIO DIGESTER - SIZING & COST ESTIMATION ENGINE
 * Industrial & Biological Wastewater Engineering Calculations
 * Strictly Professional - Zero Emojis
 */

(function () {
  'use strict';

  // Model definitions and technical specs
  const DIGESTER_MODELS = [
    {
      id: 'gl-15',
      name: 'GL-15 Compact Residential',
      minUsers: 1,
      maxUsers: 15,
      dimensions: '2.0m (L) x 1.2m (W) x 1.5m (D)',
      footprint: '2.4 m²',
      excavationVol: '3.6 m³',
      basePrice: 1150,
      installDays: '24 to 48 Hours',
      cultureLiters: '5 Liters Enzymatic Inoculant',
      frenchDrainLength: '6 to 8 meters'
    },
    {
      id: 'gl-35',
      name: 'GL-35 Deluxe Residential',
      minUsers: 16,
      maxUsers: 35,
      dimensions: '2.8m (L) x 1.5m (W) x 1.8m (D)',
      footprint: '4.2 m²',
      excavationVol: '7.5 m³',
      basePrice: 1850,
      installDays: '48 to 72 Hours',
      cultureLiters: '10 Liters Enzymatic Inoculant',
      frenchDrainLength: '10 to 14 meters'
    },
    {
      id: 'gl-75',
      name: 'GL-75 Commercial Jumbo',
      minUsers: 36,
      maxUsers: 75,
      dimensions: '4.0m (L) x 2.0m (W) x 2.2m (D)',
      footprint: '8.0 m²',
      excavationVol: '17.6 m³',
      basePrice: 3450,
      installDays: '3 to 4 Days',
      cultureLiters: '20 Liters Enzymatic Inoculant',
      frenchDrainLength: '18 to 24 meters'
    },
    {
      id: 'gl-150',
      name: 'GL-150 Institutional Heavy-Duty',
      minUsers: 76,
      maxUsers: 150,
      dimensions: '6.5m (L) x 2.4m (W) x 2.5m (D)',
      footprint: '15.6 m²',
      excavationVol: '39.0 m³',
      basePrice: 6200,
      installDays: '5 to 7 Days',
      cultureLiters: '40 Liters Enzymatic Inoculant',
      frenchDrainLength: '30 to 45 meters'
    },
    {
      id: 'gl-300',
      name: 'GL-300 Mega Commercial Plant',
      minUsers: 151,
      maxUsers: 300,
      dimensions: '9.0m (L) x 3.2m (W) x 2.8m (D)',
      footprint: '28.8 m²',
      excavationVol: '80.6 m³',
      basePrice: 10800,
      installDays: '7 to 10 Days',
      cultureLiters: '75 Liters Enzymatic Inoculant',
      frenchDrainLength: '60 to 80 meters'
    },
    {
      id: 'gl-enterprise',
      name: 'GL-Enterprise Multi-Chamber Complex',
      minUsers: 301,
      maxUsers: 9999,
      dimensions: 'Custom Modular Multi-Tank Array',
      footprint: 'Custom Scaled Engineering',
      excavationVol: 'Site Specific',
      basePrice: 16500,
      installDays: '12 to 18 Days',
      cultureLiters: '120+ Liters Inoculant Matrix',
      frenchDrainLength: 'Engineered Wetland / Subsurface Matrix'
    }
  ];

  // Property type multipliers (water consumption and peak load variance)
  const PROPERTY_MULTIPLIERS = {
    'residential-single': { factor: 1.0, dailyLitersPerUser: 60, name: 'Single-Family Home' },
    'residential-multi': { factor: 1.15, dailyLitersPerUser: 75, name: 'Multi-Tenant Apartment' },
    'commercial-office': { factor: 0.70, dailyLitersPerUser: 35, name: 'Commercial Office' },
    'school-institution': { factor: 1.25, dailyLitersPerUser: 80, name: 'School / College Campus' },
    'hospitality-hotel': { factor: 1.40, dailyLitersPerUser: 110, name: 'Hotel / Resort / Lodge' }
  };

  // Soil adjustment factors
  const SOIL_MODIFIERS = {
    'normal': { costMultiplier: 1.0, label: 'Standard / Loam (Nominal excavation)' },
    'clay': { costMultiplier: 1.18, label: 'Black Cotton / Clay (+18% ballast & aggregate)' },
    'highwater': { costMultiplier: 1.25, label: 'High Water Table (+25% waterproofing & anchoring)' },
    'rocky': { costMultiplier: 1.22, label: 'Rocky Terrain (+22% mechanical excavation)' }
  };

  function calculateSystem() {
    const userSlider = document.getElementById('calc-users');
    const userDisplay = document.getElementById('calc-users-val');
    const propertySelect = document.getElementById('calc-property');
    const soilRadio = document.querySelector('input[name="calc-soil"]:checked');
    const biogasCheck = document.getElementById('calc-biogas');
    const greywaterCheck = document.getElementById('calc-greywater');

    if (!userSlider) return;

    const users = parseInt(userSlider.value, 10);
    if (userDisplay) {
      userDisplay.textContent = users >= 500 ? '500+ Occupants' : `${users} Occupants`;
    }

    const propType = propertySelect ? propertySelect.value : 'residential-single';
    const propData = PROPERTY_MULTIPLIERS[propType] || PROPERTY_MULTIPLIERS['residential-single'];
    
    const soilType = soilRadio ? soilRadio.value : 'normal';
    const soilData = SOIL_MODIFIERS[soilType] || SOIL_MODIFIERS['normal'];

    // Find fitting model based on equivalent users
    const equivalentUsers = Math.round(users * (propData.factor >= 1.0 ? 1.0 : propData.factor));
    let model = DIGESTER_MODELS.find(m => users >= m.minUsers && users <= m.maxUsers);
    if (!model) {
      model = DIGESTER_MODELS[DIGESTER_MODELS.length - 1];
    }

    // Daily blackwater generation
    const dailyVolume = Math.round(users * propData.dailyLitersPerUser);

    // Cost calculations
    let calculatedCost = model.basePrice * soilData.costMultiplier;
    
    // Optional Biogas capture add-on
    let biogasAddonCost = 0;
    if (biogasCheck && biogasCheck.checked) {
      biogasAddonCost = Math.round(users * 18 + 450);
      calculatedCost += biogasAddonCost;
    }

    // Optional Greywater recycling add-on
    let greywaterAddonCost = 0;
    if (greywaterCheck && greywaterCheck.checked) {
      greywaterAddonCost = Math.round(users * 22 + 550);
      calculatedCost += greywaterAddonCost;
    }

    // Update UI elements
    updateElementText('out-model-name', model.name);
    updateElementText('out-daily-flow', `${dailyVolume.toLocaleString()} L / Day`);
    updateElementText('out-dimensions', model.dimensions);
    updateElementText('out-footprint', model.footprint);
    updateElementText('out-cost-estimate', `$${Math.round(calculatedCost).toLocaleString()}`);
    // Update quick spec preview link / data attributes
    const specBtn = document.getElementById('btn-download-calc-spec');
    if (specBtn) {
      specBtn.setAttribute('data-model', model.name);
      specBtn.setAttribute('data-cost', `$${Math.round(calculatedCost).toLocaleString()}`);
      specBtn.setAttribute('data-flow', `${dailyVolume.toLocaleString()} L/Day`);
      specBtn.setAttribute('data-dims', model.dimensions);
    }
  }

  function updateElementText(id, text) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = text;
    }
  }

  // Initialize event listeners when DOM is loaded
  document.addEventListener('DOMContentLoaded', function () {
    const userSlider = document.getElementById('calc-users');
    const propertySelect = document.getElementById('calc-property');
    const soilRadios = document.querySelectorAll('input[name="calc-soil"]');
    const biogasCheck = document.getElementById('calc-biogas');
    const greywaterCheck = document.getElementById('calc-greywater');

    if (userSlider) {
      userSlider.addEventListener('input', calculateSystem);
    }

    if (propertySelect) {
      propertySelect.addEventListener('change', calculateSystem);
    }

    soilRadios.forEach(radio => {
      radio.addEventListener('change', calculateSystem);
    });

    if (biogasCheck) {
      biogasCheck.addEventListener('change', calculateSystem);
    }

    if (greywaterCheck) {
      greywaterCheck.addEventListener('change', calculateSystem);
    }

    // Trigger initial calculation
    calculateSystem();
  });

  // Expose calculate function globally if needed
  window.GreenshiftCalc = {
    recalculate: calculateSystem
  };
})();
