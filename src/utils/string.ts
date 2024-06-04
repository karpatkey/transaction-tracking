export const formatEOAAccount = (account: string) => {
    // keep 8 characters of the account at the beginning and 8 characters at the end
    return `${account.slice(0, 8)}...${account.slice(account.length - 8, account.length)}`
}
