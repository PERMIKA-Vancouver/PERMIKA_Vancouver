import { CustomButton } from '../../../shared/components/CustomButton';

export const LandingComponent = () => {
  return (
    <div className="pt-navbar bg-forest-green h-screen flex items-center">
      <div className="pl-all pr-[35%] grid gap-[1.375rem]">
        <h1 className="text-white">
          PERMIKA Next<span className="text-sunset-orange">Gen</span>
        </h1>
        <h4 className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </h4>
        <CustomButton
          text={'Get tickets now!'}
          className={''}
          link={'REPLACE WITH ACTUAL LINK'}
        />
      </div>
    </div>
  );
};
