import { TimeOffContent } from './TimeOff';

export function MainContent({ activeTab }: { activeTab: string }): JSX.Element {
  const renderContent = () => {
    switch (activeTab) {
      case "Personal":
        return <div>Personal Content</div>;
      case "Job":
        return <div>Job Content</div>;
      case "Time Off":
        return <TimeOffContent />;
      case "Emergency":
        return <div>Emergency Content</div>;
      case "Documents":
        return <div>Documents Content</div>;
      case "Notes":
        return <div>Notes Content</div>;
      case "Benefits":
        return <div>Benefits Content</div>;
      case "Training":
        return <div>Training Content</div>;
      case "Assets":
        return <div>Assets Content</div>;
      case "More":
        return <div>More Content</div>;
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <main className="flex-1 p-6 bg-white rounded-b-lg">
      {renderContent()}
    </main>
  );
}