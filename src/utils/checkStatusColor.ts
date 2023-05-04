export const checkStatusColor = (status: string) => {
    switch (status) {
        case "scheduled":
            return "bg-green-500";
        case "canceled":
            return "bg-red-500";
        case "reported":
            return "bg-orange-500";
        default:
            return "bg-blue-500";
    }
};
