import React from "react";

const Install = () => {
  return (
    <div  className="p-1">
      <h4>Downloading PGP</h4>
      <ol>
        <li>
          In your browser, go to the download center at the PGP International
          Homepage
        </li>
        <li>
          Click on the PGP Freeware link where it says: "Here you may download
          the latest freeware PGP version for your platform."
        </li>
        <li>
          On the next web page, you'll be asked to answer a few simple
          questions. You have to answer Yes to all the questions as a way for
          you to declare that you won't misuse the software once you've
          downloaded it. Read each of the questions carefully before selecting
          Yes as your answer. Then click on the Submit button.
        </li>
        <li>
          On the next web page, click on the first download link under PGP
          Freeware v6.5.8 (Windows 95/98/NT/2000). You'll be prompted now to
          decide if you want to open the software right away or download it
          (Save it) to your computer hard drive. You want to Save this file to
          disk, so make sure this option is selected in the File Download dialog
          box, then click on OK.
        </li>
        <li>
          Now you have to tell your browser where you want to save the PGP
          program. Be sure to select a location on your hard drive where later
          you'll be able to easily find the zip file of the PGP software, then
          click on the Save button. The download will take a while, depending on
          the speed of your connection to the web.
        </li>
      </ol>
      <h4>Unzipping and installing the PGP software</h4>
      <p>
        Once the download is complete, you'll have the zipped version of the PGP
        program on your hard drive. Now you have to unzip it. For this, your
        best bet is to use the shareware WinZip which you'll need to have
        installed on your computer. You may already have this program from when
        you had to install other software. You can check if you have the WinZip
        program by simply double clicking on the file you just downloaded
        (PGPFW658Win32.zip). If you don't have WinZip installed on your
        computer, or if you're in doubt, you can go get it (download it) from
        the web. The best place to do this is at
        http://www.winzip.com/ddchomea.htm. Follow the directions to install the
        WinZip software on your computer. With a program such as WinZip
        installed on your computer, you are now ready to unzip and install PGP.
        Here are the steps to follow:
      </p>

      <ol>
        <li>
          Now locate the PGP zip file PGPFW658Win32.zip wherever you downloaded
          it on your computer and double click on it to unzip it.
        </li>
        <li>
          Next you'll be prompted to run the PGP Setup program, which will begin
          immediately. You'll be presented right away with the PGP Freeware
          6.5.8 Setup Wizard.
        </li>
        <li>
          Follow the Wizard's step-by-step directions, clicking on the Next
          button as you go along. The first three screens contain info about PGP
          (licensing, etc.). Read them before clicking on the Next button.
        </li>
        <li>
          The 4th screen asks you to enter your name and the name of the company
          you work for. Next you're asked to confirm the folder where you want
          the PGP Wizard to install the program. Unless you have other ideas,
          accept the default for this item.
        </li>
        <li>
          Keep your wits about you on the next screen, which asks you which PGP
          components you want to install. You do NOT need to install PGPnet
          Virtual Private Networking, since for most people it's unnecessary
          and, as Steve Kinney points out, can create nasty network
          configuration problems. So Deselect this item by removing the check
          mark next to it before clicking on the Next button.
        </li>
        <li>
          On each of the ensuing screens, read what the Wizard has to say. When
          asked, accept the defaults and let the Wizard do all the setup for
          you.
        </li>
        <li>
          Once the PGP software is installed, you will have to reboot your
          system. PGP will prompt you to go ahead and Restart.
        </li>
        <li>
          After your system has been restarted, you are ready to create your
          Public and Private Keys.
        </li>
      </ol>
    </div>
  );
};

export default Install;
