declare const axiosRepeatAbandon: (axios: AxiosStatic, { time, openSwitch }: {
    time?: number | undefined;
    openSwitch?: boolean | undefined;
}) => void;
export default axiosRepeatAbandon;
