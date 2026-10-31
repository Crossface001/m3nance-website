document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');

  if (!button) return;

  button.addEventListener('click', () => {
    const artistLink = 'https://open.spotify.com/artist/5WZE0vo8iYvdtxiueAyvsQ?si=heWKbRDzRo--hB8MZb6YXg&utm_source=copy-link';
    window.location.href = artistLink;
  });
});
