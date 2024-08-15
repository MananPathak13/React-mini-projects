const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTickTacToe: true,
    ShowAccordian: true

}


function featureFlagsDataServiceCall() {

    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject("Some error");
    })
}

export default featureFlagsDataServiceCall;