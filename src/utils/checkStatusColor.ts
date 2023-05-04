export const checkStatusColor = (status: string) => {
    switch (status) {
        case "Scheduled":
            return "bg-green-500";
        case "Canceled":
            return "bg-red-500";
        case "Reported":
            return "bg-orange-500";
        default:
            return "bg-blue-500";
    }
};
