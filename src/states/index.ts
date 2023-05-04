import { proxy } from "valtio";

const primaryStates = proxy({
    statusColor: "bg-blue-500",
});

export default primaryStates;
