function formatPhoneNumber(input) {
    let cleaned = ('' + input.value).replace(/\D/g, '');
    if (cleaned.length === 11) {
        cleaned = cleaned.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($2) $3 $4 $5');
    } else if (cleaned.length > 11) {
        cleaned = cleaned.slice(0, 11).replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3 $4 $5');
    }
    input.value = cleaned;
}
