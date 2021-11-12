import Countdown from "../Countdown/Countdown";
import Card from "./Card/Card";

import image from "assets/images/de_dust.jpg";
import { FlexColumn } from "components/common/flex";
import { useCallback, useState } from "react";

export const maps = [
  {
    id: "de_dust2",
    title: "DE_DUST2",
    imageUrl: image,
    active: true,
  },
  {
    id: "de_inferno",
    title: "DE_INFERNO",
    imageUrl: image,
    active: true,
  },
  {
    id: "de_mirage",
    title: "DE_DUST2",
    imageUrl: image,
    active: true,
  },
  {
    id: "de_nuke",
    title: "DE_INFERNO",
    imageUrl: image,
    active: true,
  },
  {
    id: "de_overpass",
    title: "DE_DUST2",
    imageUrl: image,
    active: true,
  },
  {
    id: "de_train",
    title: "DE_INFERNO",
    imageUrl: image,
    active: false,
  },
];

interface Props {
  onMapChoosen: (mapId: string) => void;
}

const Voting = ({ onMapChoosen }: Props) => {
  const [values, setValues] = useState(maps.map((m) => m.id));

  const handleChoose = useCallback(
    (id) => {
      const newValues = values.filter((v) => v !== id);
      if (newValues.length === 1) {
        onMapChoosen(newValues[0]);
      }
      setValues(newValues);
    },
    [values, setValues, onMapChoosen]
  );

  return (
    <div>
      <Countdown time="00:18" description="Your opponent is voting" />
      <FlexColumn gap="11px">
        {maps.map((map) => (
          <Card
            key={map.id}
            title={map.title}
            imageUrl={map.imageUrl}
            active={values.includes(map.id)}
            onChoose={() => handleChoose(map.id)}
          />
        ))}
      </FlexColumn>
    </div>
  );
};

export default Voting;
