import type { GhostscriptModule, GhostscriptModuleFactory } from '../types/index';
export type { GhostscriptModule, GhostscriptModuleFactory };
// @ts-ignore
import ModuleFactory from '../assets/gs.js';

const loadWASM = ModuleFactory as unknown as GhostscriptModuleFactory;

export default loadWASM;
