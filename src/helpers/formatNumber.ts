const formatNumber = (num: number, digits: number = 2) =>
    String(num).padStart(digits, '0')

export { formatNumber }
