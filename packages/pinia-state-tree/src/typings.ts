interface NxStatic {
  $set: (inKey: any, inValue?: any) => void;
  $get: (inKey?: string, inDefault?: any) => any;
  $rootState: any;
  $rootStore: any;
  $app: any;
  $pin: any;
  $call: (inName: string, ...args: any[]) => any;
  $query: (inKey?: string, inDefault?: Function) => any;
  $map: (inArray: string[]) => Record<string, Function>;
  $use: (inStores: Record<string, () => any>, inOptions?: { immediate: boolean }) => any;
}
