const vendorData = [
  { name: 'PharmD Live', location: 'Washington D.C.', count: '2,800', tags: ['AWV', 'TCM', 'CCM'], stats: ['6,890', '1,245', '3,456'] },
  { name: 'ZealCare', location: 'Durham, NC', count: '3,100', tags: ['CCM'], stats: ['—', '—', '27,200'] },
  { name: 'Pacific Health Partners', location: 'West Coast', count: '2,200', tags: ['AWV', 'TCM', 'CCM'], stats: ['5,200', '980', '2,800'] },
  { name: 'Midwest Care Group', location: 'Midwest', count: '2,100', tags: ['AWV', 'TCM', 'CCM'], stats: ['8,100', '1,560', '4,300'] },
  { name: 'Southern Medical Alliance', location: 'South', count: '2,250', tags: ['AWV', 'TCM', 'CCM'], stats: ['12,500', '2,340', '6,800'] },
  { name: 'Mountain States Health', location: 'Mountain', count: '4,200', tags: ['TCM', 'AWV', 'CCM'], stats: ['4,800', '870', '2,400'] },
  { name: 'Atlantic Care Systems', location: 'Mid-Atlantic', count: '2,400', tags: ['AWV', 'TCM', 'CCM'], stats: ['7,600', '1,420', '3,900'] },
  { name: 'Great Lakes Medical', location: 'Great Lakes', count: '2,000', tags: ['AWV', 'TCM', 'CCM'], stats: ['6,100', '1,120', '3,100'] },
];

const practiceData = [
  { name: 'Beacon Hill Primary Care', location: 'Boston, MA 02108', count: '2,800', tags: ['AWV', 'TCM'], stats: ['1,500', '280', '—'] },
  { name: 'Hartford Cardiology Associates', location: 'Hartford, CT 06103', count: '3,100', tags: ['TCM'], stats: ['—', '310', '—'] },
  { name: 'Providence Family Health', location: 'Providence, RI 02903', count: '2,200', tags: ['TCM', 'CCM'], stats: ['—', '220', '610'] },
  { name: 'New England Geriatrics', location: 'Burlington, VT 05401', count: '2,100', tags: ['AWV', 'CCM'], stats: ['1,100', '—', '580'] },
  { name: 'Coastal Internal Medicine', location: 'Portland, ME 04101', count: '2,250', tags: ['AWV', 'TCM', 'CCM'], stats: ['1,390', '235', '636'] },
  { name: 'Durham Wellness Center', location: 'Durham, NC 27701', count: '4,200', tags: ['CCM'], stats: ['—', '—', '27,200'] },
  { name: 'Bay Area Family Medicine', location: 'San Francisco, CA 94102', count: '2,400', tags: ['AWV', 'TCM', 'CCM'], stats: ['1,300', '240', '700'] },
  { name: 'Pacific Pulmonary Clinic', location: 'Seattle, WA 98101', count: '2,000', tags: ['AWV', 'CCM'], stats: ['1,050', '—', '560'] },
];

const cardsGrid = document.getElementById('cardsGrid');
const tabs = document.querySelectorAll('.tab');
const networkTitle = document.getElementById('networkTitle');

function renderCards(data) {
  cardsGrid.innerHTML = data
    .map(
      (item) => `
      <article class="network-card">
        <div class="card-top">
          <div>
            <h4 class="network-title">${item.name}</h4>
            <div class="subtitle">📍 ${item.location}</div>
          </div>
          <div class="count">👥 ${item.count}</div>
        </div>
        <div class="chips">${item.tags.map((tag) => `<span class="chip">${tag}</span>`).join('')}</div>
        <div class="stats">
          <div class="stat-box">AWV - Completed<strong>${item.stats[0]}</strong></div>
          <div class="stat-box">TCM - Follow-up Completed<strong>${item.stats[1]}</strong></div>
          <div class="stat-box">CCM - 20+ Min Completed<strong>${item.stats[2]}</strong></div>
        </div>
        <div class="view-link">View Details →</div>
      </article>`
    )
    .join('');
}

renderCards(vendorData);

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((btn) => btn.classList.remove('active'));
    tab.classList.add('active');
    const selected = tab.dataset.network;
    networkTitle.textContent = selected === 'vendor' ? 'Vendor Network' : 'Practice Insights';
    renderCards(selected === 'vendor' ? vendorData : practiceData);
  });
});
