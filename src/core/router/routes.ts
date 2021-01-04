import { generatePath } from "react-router-dom";


interface SwitchRoutes {
  root: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
}

interface Routes extends Omit<SwitchRoutes, 'detailEmployee'> {
  // detailEmployee: (id: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  // detailEmployee: (id: number) => generatePath(switchRoutes.detailEmployee, { id })
}