package com.company;

import com.hp.lft.sdk.mobile.*;
import com.hp.lft.sdk.mobile.Application;
import com.hp.lft.sdk.mobile.ApplicationDescription;
import com.hp.lft.sdk.mobile.UiObject;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import com.hp.lft.sdk.*;
import com.hp.lft.verifications.*;

import unittesting.*;

public class UFTDeveloperTest extends UnitTestClassBase {

    public UFTDeveloperTest() {
        //Change this constructor to private if you supply your own public constructor
    }

    @BeforeClass
    public static void setUpBeforeClass() throws Exception {
        instance = new UFTDeveloperTest();
        globalSetup(UFTDeveloperTest.class);
    }

    @AfterClass
    public static void tearDownAfterClass() throws Exception {
        globalTearDown();
    }

    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void test() throws GeneralLeanFtException {

        // Mobile tests usually start by locking a device from UFT Mobile. In this step, we'll lock a device by its ID
        Device device = MobileLab.lockDeviceById("9889d63758434f4b39"); // ce08171898ee74520c7e /

        device.openViewer();

        Application advantageShoppingApplication = device.describe(Application.class, new ApplicationDescription.Builder()
                .identifier("com.Advantage.aShopping")
                .packaged(false).build());
        advantageShoppingApplication.launch();

        UiObject imageViewSearchUiObject = advantageShoppingApplication.describe(UiObject.class, new UiObjectDescription.Builder()
                .className("ImageView")
                .mobileCenterIndex(2)
                .nativeClass("android.widget.ImageView")
                .resourceId("com.Advantage.aShopping:id/imageViewSearch").build());
        imageViewSearchUiObject.tap();

        device.sendString("17t");

        imageViewSearchUiObject.tap();

        Label hPENVY17TTOUCHLAPTOPLabel = advantageShoppingApplication.describe(Label.class, new LabelDescription.Builder()
                .className("Label")
                .mobileCenterIndex(2)
                .nativeClass("android.widget.TextView")
                .resourceId("com.Advantage.aShopping:id/textViewProductName")
                .text("HP ENVY - 17T TOUCH LAPTOP").build());
        hPENVY17TTOUCHLAPTOPLabel.tap();

        Button aDDTOCARTButton = advantageShoppingApplication.describe(Button.class, new ButtonDescription.Builder()
                .className("Button")
                .mobileCenterIndex(0)
                .nativeClass("android.widget.Button")
                .resourceId("com.Advantage.aShopping:id/buttonProductAddToCart")
                .text("ADD TO CART").build());
        aDDTOCARTButton.tap();

        UiObject imageViewBackUiObject = advantageShoppingApplication.describe(UiObject.class, new UiObjectDescription.Builder()
                .className("ImageView")
                .mobileCenterIndex(0)
                .nativeClass("android.widget.ImageView")
                .resourceId("com.Advantage.aShopping:id/imageViewBack").build());
        imageViewBackUiObject.tap();

        imageViewBackUiObject.tap();

        UiObject imageViewMenuUiObject = advantageShoppingApplication.describe(UiObject.class, new UiObjectDescription.Builder()
                .className("ImageView")
                .mobileCenterIndex(0)
                .nativeClass("android.widget.ImageView")
                .resourceId("com.Advantage.aShopping:id/imageViewMenu").build());
        imageViewMenuUiObject.tap();

        Label hOMELabel = advantageShoppingApplication.describe(Label.class, new LabelDescription.Builder()
                .className("Label")
                .mobileCenterIndex(6)
                .nativeClass("android.widget.TextView")
                .resourceId("com.Advantage.aShopping:id/textViewMenuHome")
                .text("HOME").build());
        hOMELabel.tap();

        advantageShoppingApplication.kill();

        device.closeViewer();


    }

}