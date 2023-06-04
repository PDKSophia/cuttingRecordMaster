import { Master } from '@typings/node';
import { MainIpc } from '@common/services/ipc';
import WindowService from '@common/services/windowService';
import { registerWindow } from '@common/services/windowService/windows';
import { MAIN_PROCESS_KEY } from '@common/constants/processKey';
import initMainLog from './log';

export interface InitMainMasterOptions {}

export function initMaster(options?: InitMainMasterOptions): Promise<Master> {
  return new Promise((resolve) => {
    const ipc = new MainIpc({ processKey: MAIN_PROCESS_KEY });
    const log = initMainLog();
    const windowService = WindowService;
    registerWindow();

    const master: Master = {
      services: {
        ipc,
        windowService,
      },
      tools: {
        log,
      },
    };

    resolve(master);
  });
}

export default initMaster;
