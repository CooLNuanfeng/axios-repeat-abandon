declare const axiosRepeatAbandon: (axios: Function, config?: {
  time: number,
  openSwitch?: boolean
}) => void

export default axiosRepeatAbandon