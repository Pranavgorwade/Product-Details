// Show preview
function showImgPreview() {
    $('.preview-container').show();
    $('#prev-img').attr('src', 'design_colors_pink_front__dbqafvrvcy6a_xlarge.jpg');
  }

  // Hide Preview
  function hidePreview() { $('.preview-container').hide(); }
  function showAlert(mess) {
    Swal.fire({ position: 'center', icon: 'success', title: '', text: mess, showConfirmButton: false, timer: 1500 }); 
  }