export const nothingEnteredError = () => (value) => {
    if (!value || value === '') return 'You\'ve entered nothing!';
    
    return undefined;
}