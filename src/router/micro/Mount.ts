import { isString } from 'util';
import { moduleList } from '@/router/micro/moduleList';
import { store } from '@/store';

declare type Cons<T, S = {}> = {
  new (...args: any[]): T;
  /* tslint:disable member-ordering */
  prototype: T;
  /* tslint:enable member-ordering */
} & S;

export class Mount {
  private static store = store;
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
        let modules = await mt.loadModule(m.path);
        if (!(typeof modules === 'object')) {
          modules = modules({ store: Mount.store });
        }
        const { component, mount } = modules;
        const com = new component();

        mount.call(com, hook);
      } else {
        /* tslint:disable no-console */
        console.error('cannot found hook');
        /* tslint:enable no-console */
      }
    };
  }

  // private loadModule(path: Cons<any, any>): Promise<any>;
  private loadModule(path: string): Promise<any> {
    if (isString(path)) {
      if (!path.endsWith('/')) {
        path = `${path}/`;
      }
      const pathArr: string[] = path.split('/');
      const len = pathArr.length;
      const n = pathArr.splice(len - 2, 2)[0];
      const p = pathArr.join('');

      const [name, loadModule] = moduleList.filter(op => {
        return op[0] === p;
      })[0];
      return loadModule().then(
        m => {
          // @ts-ignore
          return Promise.resolve(m[n]);
        },
        error => Promise.reject(`could not find module ${n}`),
      );
    } else {
      return Promise.resolve(path);
    }
  }
}
