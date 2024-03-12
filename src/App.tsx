import React, { useEffect, useRef, useState } from "react";
import { URL } from "./assets/consts";
import { TUser } from "./assets/types";
import { useThrottle } from "./assets/hooks";
import { Button } from "./components/Button";
import { UserInfo } from "./components/UserInfo";

const App: React.FC = () => {
  const [record, setRecord] = useState<Record<number, TUser | null>>({
    0: null,
  });
  const [id, setId] = useState<number>(0);
  const throttledId = useThrottle(id);
  const user = useRef<TUser | null>(null);

  const receiveRandomUser = async (id: number) => {
    if (id === 0) {
      return;
    } else if (record[id]) {
      user.current = record[id];
      return;
    } else {
      try {
        const response = await fetch(`${URL}/${id}`);
        const _user = (await response.json()) as TUser;
        user.current = _user;
        setRecord((prev) => ({ ...prev, [id]: _user }));
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : error;
        console.error(errorMessage);
      }
    }
  };

  useEffect(() => {
    console.log('calling receiveRandomUser');
    receiveRandomUser(throttledId);
  }, [throttledId]);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    const randomId = Math.floor(Math.random() * (10 - 1)) + 1;
    setId(randomId);
  };

  return (
    <div>
      <header>Get a random user</header>
      <Button onClick={handleButtonClick} />
      {user.current ?
        <UserInfo user={user.current} />
        :
        <div>User is not defined</div>
      }
    </div>
  );
};

export default App;
