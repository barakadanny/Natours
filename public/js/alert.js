export const hideAlert = () => {
    const el = document.querySelector('.alert');
    if(el) el.parentElement.removeChild(el);
}

// TYPE: 'success' or 'error'
// ! Alert not hidden after the 5000 milliseconds.
// TODO: Work on differentiating the background color when success || warning
export const showAlert = (type, msg) => {
    hideAlert();

    const markup = `
        <div class="bg-colorCoral px-4 py-3">
            <p class="text-center text-white text-sm font-medium">
                ${msg}
            </p>
        </div>
    `;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

    window.setTimeout(hideAlert, 5000);
}



