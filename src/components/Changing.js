import React from "react";

const Changing = () => {
  return (
    <div className="p-1">
      <h4>Changing your Passphrase</h4>
      <p>
        After a while, as you become more accustomed to using PGP, you may well
        want to change your passphrase, especially if the one you first chose is
        not complex enough for your liking, or if it has become compromised by
        someone else discovering what it is. Changing your Passphrase is a
        simple process.
      </p>
      <p>To change your Passphrase, here's all you do:</p>
      <ol>
        <li>
          Open PGPkeys by selecting Start/Programs/PGP/PGPkeys or by clicking
          again on the PGPtray icon PGPtray icon in the lower right corner of
          your screen and selecting PGPkeys in the pop up menu.
        </li>
        <li>
          Highlight the key you want to change the passphrase for, then from the
          Keys menu select Properties.
        </li>
        <li>
          In the dialog box that pops up on the screen, you'll see the button to
          Change Passphrase. Click on Change Passphrase, and in the next dialog
          box, as you might expect, you're asked to enter your current
          Passphrase. Go ahead and do this, then click on OK.
        </li>
        <li>
          Now all you have to do is decide on a new Passphrase, write it down if
          necessary so you don't forget it, then in large letters write on the
          note the word "DESTROY" or "BURN" to remind yourself to do this once
          you've used the new Passphrase often enough to know it by heart.
        </li>
        <li>
          When you're ready, enter it in the New Passphrase dialog box, and
          Confirm the New Passphrase by entering it again, then click on OK.
        </li>
      </ol>
    </div>
  );
};

export default Changing;
