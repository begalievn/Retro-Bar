export const getPhoneNumber = (phone: string) => phone
        .replace(/\s+/g, "")
        .slice(1);
