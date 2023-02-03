function createMasonry(selector, itemSelector) {
  var grid = document.querySelector(selector);
  return new Masonry(grid, {
     itemSelector,
     percentPosition: true,
     fixWidth: true,
  });
}

function showRendering(target) {
  if (window.msnry != null) {
     window.msnry.destroy();
  }

  $('[data-rendering-item]').addClass('hide').removeClass('grid-item');

  if (target == null) {
     $('[data-rendering-item]').removeClass('hide').addClass('grid-item');
  } else {
     $('[data-rendering-item="' + target + '"]').removeClass('hide').addClass('grid-item');
  }
  window.msnry = createMasonry('.grid', '.grid-item');
}

$('[data-rendering-target]').click((e) => {
  e.preventDefault();
  $('[data-rendering-target]').removeClass("active");
  $(e.currentTarget).addClass("active");
  const target = $(e.currentTarget).data("rendering-target");
  showRendering(target === 'all' ? undefined : target);
});

window.msnry = createMasonry('.grid', '.grid-item');