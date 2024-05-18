const CURRENCY_FORMAT = new Intl.NumberFormat('pt-BR', {currency: "BRL", style: "currency"});

export function formatCurrency(price: number) {
    return CURRENCY_FORMAT.format(price);
}