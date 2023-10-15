import { Eight, Eleven, Fifth, First, Fourteen, Fourth, Home, Nine, Second, Seven, Sixth, Ten, Third, Thirteen, Tweleve } from "../index";

export const renderActiveComponent = (componetNumber: number) => {
  switch (componetNumber) {
    case 2:
      return <First />;
    case 3:
      return <Second />;
    case 4:
      return <Third />;
    case 5:
      return <Fourth />;
    case 6:
      return <Fifth />;
    case 7:
      return <Sixth />;
    case 8:
      return <Seven />;
    case 9:
      return <Eight />;
    case 10:
      return <Nine />;
    case 11:
      return <Ten />;
    case 12:
      return <Eleven />;
    case 13:
      return <Tweleve />;
    case 14:
      return <Thirteen />;
    case 15:
      return <Fourteen />;
    default:
      return <Home />;
  }
};
