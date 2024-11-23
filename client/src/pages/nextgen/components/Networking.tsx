import { CustomButton } from '../../../shared/components/CustomButton';

export const Networking = () => {
  return (
    <div className="pl-all py-12">
      <h2 className="mb-4">Networking 101</h2>
      <p className="text-pretty">
        Not sure how to network? We've got you covered! Check out this resource
        to get started.
      </p>
      <CustomButton
        text={'Learn here!'}
        className={'mt-4'}
        link={
          'https://drive.google.com/file/d/1vx-7d02RHf3MrD9hFw2ByM--0CdWPKxe/view'
        }
      />
    </div>
  );
};
