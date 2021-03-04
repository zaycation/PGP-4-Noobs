import React from "react";
import Table from "react-bootstrap/Table";

const Options = () => {
  return (
    <>
      <h4>Useful PGP Options you should know about</h4>
      <p>
        We'll be adding explanations for more PGP Options over the next few
        weeks. For now, here is an explanation of how you can tweak the time
        frame of the cache that PGP uses to remember your Passphrase. You'll
        also find out here how to Purge your Passphrase cache, a simple task
        which is very important to remember to do when you leave your computer
        unattended. Finally, for your convenience, we've added a table listing
        the hotkeys available in PGP.
      </p>
      <p>
        As mentioned above in Step 8, every time PGP needs access to the Private
        Key (to Decrypt an Encrypted Message or Sign an Outgoing Message or
        someone's Public Key) the corresponding Passphrase will need to be
        re-entered. By default, PGP will remember--cache--your Passphrase for
        two minutes so that you do not have to re-enter it if needed more than
        once within this time frame. A cache (which means "hidden" or "hiding
        place" in French) is a small area on your disk used by the computer to
        store data it needs to access quickly and frequently. PGP's Passphrase
        caches are used to save you time by temporarily holding your Passphrases
        (you may have more than one) after you've typed them a first time in a
        session at the computer. Unfortunately, two minutes is too short a time
        frame for most users, with the result that it's usually necessary to
        re-enter the Passphrase every time. This is no problem if your
        Passphrase is short and easy to enter; but a short, simple Passphrase
        defeats the purpose of PGP which encourages the use of suitably large
        and complex Passphrases in order to foil attempts at cracking them, as
        explained above in Step 3 above.
      </p>
      <p>
        Altering the time that PGP keeps your Passphrase in the cache. This will
        save you having to repeatedly re-enter your Passphrase every time you
        need access to the Private Key. Just remember, before you leave your
        machine unattended, to tell PGP to forget the Passphrase [empty the
        Cache]. Here are the simple steps to extend the time that PGP keeps your
        Passphrase in the cache:
      </p>
      <ol>
        <li>
          Click on the PGPtray icon PGPtray icon in the lower right corner of
          your screen and select Options... in the pop-up menu.
        </li>
        <li>
          Make sure the General tab is selected in the Options dialog box and
          notice the Passphrase caching options related to Single Sign-On.
        </li>
        <li>
          Increase the default amount of time you want your Passphrase cached.
          If you normally are at your computer for an hour or more, you might
          increase the time to one hour, for example. If you always log off when
          you leave your computer, you might select the option to cache your
          Passphrase while logged on.
        </li>
      </ol>
      <p>Purging your Passphrase caches:</p>
      The simplest way to do this is to use the quick keyboard (hotkey) command:
      control-F12. Hold down the control key while you press the F12 key.
      <p>
        The important thing is to err on the side of safety. Don't cache your
        passphrase for a long period of time because if someone comes to your
        computer while you're away from the machine, your encrypted information
        will be able to be read if that person knows how to use PGP. Depending
        on your circumstances (are you concerned that someone nearby might check
        out the contents of your computer?) you should get into the habit of
        purging your Passphrase caches whenever you leave your computer
        unattended. Better safe than sorry.
      </p>
      <p>PGP's HotKeys:</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Task</th>
            <th>HotKey</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Purge Passphrase Caches</td>
            <td>control-F12</td>
          </tr>
          <tr>
            <td>Encrypt Current Window</td>
            <td>control-shift-e</td>
          </tr>
          <tr>
            <td>Sign Current Window</td>
            <td>control-shift-s</td>
          </tr>
          <tr>
            <td>Encrypt & Sign Current Window</td>
            <td>control-shift-c</td>
          </tr>
          <tr>
            <td>Decrypt & Verify Current Window</td>
            <td>control-shift-d</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Options;
