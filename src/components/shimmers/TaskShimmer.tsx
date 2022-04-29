import { AnimateOpacity } from "components";

export const TaskShimmer = () => (
  <AnimateOpacity>
    <div className="animate-pulse flex flex-col flex-1 h-[130px] border-[1px]  border-l-8 mx-4 p-3  m-4 ">
      <div className="flex-1 space-y-6 py-1 ">
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2" />
            <div className="h-2 bg-slate-200 rounded col-span-1" />
          </div>
          <div className="h-2 bg-slate-200 rounded" />
        </div>
        <div className="h-2 bg-slate-200 rounded m-0 w-full" />
      </div>
      <div className="h-2 bg-slate-200 rounded m-0 w-full" />
    </div>
  </AnimateOpacity>
);
