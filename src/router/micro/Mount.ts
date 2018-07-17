import { isString } from 'util';

declare type Cons<T, S = {}> = {
  new (...args: any[]): T;
  prototype: T;
} & S;

export class Mount {
  public mounted: () => void;

  constructor(
    public m: {
      path: string;
    },
  ) {
    // due to Vue change its this pointer, so we cache this to mt;
    const mt = this;

    this.mounted = async function() {
      // @ts-ignore;
      const hook: Element = this.$refs.hook;
      if (hook) {
        const modules = await mt.loadModule(m.path);
        const { component, mount } = modules;
        mount.call(new component(), hook);
      } else {
        console.error('cannot found hook');
      }
    };
  }

  // private loadModule(path: Cons<any, any>): Promise<any>;
  private loadModule(path: string): Promise<any> {
    if (isString(path)) {
      const pathArr: string[] = path.split('/');
      const len = pathArr.length;
      const n = pathArr.splice(len - 1, 1)[0];
      const p = pathArr.join('/');
      console.log(p);
      return import('@/pages/MainPage').then(
        m => {
          console.log(m);
          return Promise.resolve(m[n]);
        },
        error => Promise.reject(`could not find module ${n}`),
      );
    } else {
      return Promise.resolve(path);
    }
  }
}
