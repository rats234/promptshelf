
document.getElementById('searchBar').addEventListener('keyup', function() {
  let filter = this.value.toLowerCase();
  let links = document.querySelectorAll('#featured a, #categories a');
  links.forEach(link => {
    if (link.textContent.toLowerCase().includes(filter)) {
      link.style.display = '';
    } else {
      link.style.display = 'none';
    }
  });
});
