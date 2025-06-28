 document.querySelectorAll('.video-popup-wrapper').forEach(card => {
    card.addEventListener('click', function () {
      const videoUrl = this.getAttribute('data-video');
      const modal = new bootstrap.Modal(document.getElementById('videoModal'));
      document.getElementById('videoIframe').src = videoUrl + "?autoplay=1";
      modal.show();
    });
  });

  document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('videoIframe').src = '';
  });

