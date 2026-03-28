document.addEventListener('DOMContentLoaded', function() {
    const refreshName = document.getElementById('refresh-name');
    if (refreshName) {
        refreshName.addEventListener('click', function() {
            location.reload();
        });
    }
});