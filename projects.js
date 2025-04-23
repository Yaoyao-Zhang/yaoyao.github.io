function showProject(type) {
  const credit = document.getElementById('project-credit');
  const loan = document.getElementById('project-loan');

  // Show/hide project content
  credit.style.display = type === 'credit' ? 'block' : 'none';
  loan.style.display = type === 'loan' ? 'block' : 'none';

  // Clear all active states
  document.querySelectorAll('.project-nav li').forEach(li => li.classList.remove('active'));

  // Apply active state based on selection
  if (type === 'credit') {
    document.getElementById('nav-credit').classList.add('active');
    document.getElementById('nav-mari').classList.add('active');
  } else if (type === 'loan') {
    document.getElementById('nav-loan').classList.add('active');
    document.getElementById('nav-mari').classList.add('active');
  }
}
