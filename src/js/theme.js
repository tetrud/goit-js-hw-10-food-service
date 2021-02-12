const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
checkboxRef.addEventListener('change', onChangeTheme);

currentTheme();

function onChangeTheme() {
  document.body.classList.toggle(Theme.DARK);

  if (document.body.classList.contains(Theme.DARK)) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function currentTheme() {
  const sevedTheme = localStorage.getItem('theme');

  if (sevedTheme === Theme.DARK) {
    document.body.classList.add('dark-theme');
    checkboxRef.checked = true;
  } else {
    checkboxRef.checked = false;
  }
}
