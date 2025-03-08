const convertSymbol = (symbol: string) => {
    switch (symbol) {
        case '—': {
            return '-'
        }
        case '«': {
            return '"'
        }
        case '»': {
            return '"'
        }
        default: {
            return symbol
        }
    }
}

export { convertSymbol }
