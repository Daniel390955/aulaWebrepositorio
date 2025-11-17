(function (window, document) {
  function inicializarFormularioCadastro() {
    var form = document.getElementById('cadastro-form');
    if (!form) {
      return;
    }

    var submitBtn = document.getElementById('submitBtn');
    var dialog = document.getElementById('successDialog');
    var closeModal = document.getElementById('closeModal');

    if (dialog && !dialog.showModal) {
      dialog.showModal = function () {
        dialog.setAttribute('open', '');
      };
      dialog.close = function () {
        dialog.removeAttribute('open');
      };
    }

    var banner = document.querySelector('.alert-banner');
    if (!banner) {
      banner = document.createElement('section');
      banner.className = 'alert-banner';
      banner.setAttribute('role', 'status');
      banner.setAttribute('aria-live', 'polite');
      banner.textContent = 'Cadastro enviado com sucesso!';
      document.body.appendChild(banner);
    }

    function showBanner(msg, duration) {
      banner.textContent = msg;
      banner.classList.add('show');
      window.setTimeout(function () {
        banner.classList.remove('show');
      }, duration || 3500);
    }

    function updateSubmitState() {
      if (submitBtn) {
        submitBtn.disabled = !form.checkValidity();
      }
    }

    updateSubmitState();

    Array.prototype.forEach.call(
      form.querySelectorAll('input'),
      function (input) {
        input.addEventListener('input', function () {
          if (input.checkValidity()) {
            input.classList.add('valid');
            input.classList.remove('invalid');
          } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
          }
          updateSubmitState();
        });
      }
    );

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      showBanner('Cadastro enviado com sucesso! Obrigado por se inscrever.');
      if (dialog) {
        dialog.showModal();
      }

      form.reset();
      Array.prototype.forEach.call(
        form.querySelectorAll('input'),
        function (input) {
          input.classList.remove('valid');
          input.classList.remove('invalid');
        }
      );
      updateSubmitState();
    });

    if (closeModal && dialog) {
      closeModal.addEventListener('click', function () {
        dialog.close();
      });
    }
  }

  window.inicializarFormularioCadastro = inicializarFormularioCadastro;
})(window, document);
