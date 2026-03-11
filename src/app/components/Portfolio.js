"use client";
import { useState, useEffect } from "react";

export default function Portfolio() {
    const [filter, setFilter] = useState("All");
    const [videoUrl, setVideoUrl] = useState("");
    const [videoTitle, setVideoTitle] = useState("");
    const categories = ["All", "B2B", "B2C", "Education", "Health Care", "Information Technology"];


    const items = [
        { id: 1, title: "Microsoft - Employee Devices I Explainer Video by Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/602215167?h=01d057ba98", image: "/assets/images/portfolio/b2c/2.png" },
        { id: 2, title: "Project B", category: "Information Technology", video: "https://player.vimeo.com/video/746877725", image: "/assets/images/portfolio/b2b/1.jpg" },
        { id: 3, title: "Project C", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/376859283", image: "/assets/images/portfolio/common/4.webp" },
        { id: 4, title: "Project D", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/common/1.jpg" },
        { id: 5, title: "Project E", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/376859283", image: "/assets/images/portfolio/common/3.jpg" },
        { id: 6, title: "Project F", category: ["B2C", "B2B", "Information Technology"], video: "https://player.vimeo.com/video/602213469", image: "/assets/images/portfolio/common/5.png" },
        { id: 7, title: "Project G", category: ["B2C", "Health Care", "Information Technology"], video: "https://player.vimeo.com/video/602225850", image: "/assets/images/portfolio/common/2.jpg" },
        { id: 8, title: "Project H", category: "B2B", video: "https://player.vimeo.com/video/605842193", image: "/assets/images/portfolio/b2b/2.jpg" },
        { id: 9, title: "Project I", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/336123110", image: "/assets/images/portfolio/common/6.jpg" },
        { id: 10, title: "Project J", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/602256340", image: "/assets/images/portfolio/common/7.jpg" },
        { id: 11, title: "Project K", category: "Information Technology", video: "https://player.vimeo.com/video/746865222", image: "/assets/images/portfolio/b2b/3.jpg" },
        { id: 12, title: "Project L", category: ["B2C", "B2B", "Information Technology"], video: "https://player.vimeo.com/video/696057141", image: "/assets/images/portfolio/common/8.jpg" },
        { id: 13, title: "Project M", category: "B2C", video: "https://player.vimeo.com/video/686665400", image: "/assets/images/portfolio/b2b/4.JPG" },
        { id: 14, title: "Project N", category: ["B2C", "B2B"], video: "https://player.vimeo.com/video/336133361", image: "/assets/images/portfolio/common/9.JPG" },
        { id: 15, title: "Project O", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/602234110", image: "/assets/images/portfolio/common/10.png" },
        { id: 16, title: "Project P", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/616274510", image: "/assets/images/portfolio/common/12.jpg" },
        { id: 17, title: "Project Q", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/616267571", image: "/assets/images/portfolio/common/11.jpg" },
        { id: 18, title: "Project R", category: ["B2B", "B2C"], video: "https://player.vimeo.com/video/614002618", image: "/assets/images/portfolio/common/13.jpg" },
        { id: 19, title: "Project S", category: ["B2C", "B2B", "Information Technology"], video: "https://player.vimeo.com/video/748818309", image: "/assets/images/portfolio/common/14.png" },
        { id: 20, title: "Project T", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/746902309", image: "/assets/images/portfolio/common/15.jpg" },
        { id: 21, title: "Project U", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/602262713", image: "/assets/images/portfolio/common/16.jpg" },
        { id: 22, title: "Project V", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/338239964", image: "/assets/images/portfolio/common/17.png" },
        { id: 23, title: "Project W", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/376867121", image: "/assets/images/portfolio/common/18.jpg" },
        { id: 24, title: "Project X", category: ["B2B", "B2C"], video: "https://player.vimeo.com/video/602222865", image: "/assets/images/portfolio/common/19.jpg" },
        { id: 25, title: "Project Y", category: ["B2B", "B2C"], video: "https://player.vimeo.com/video/672297683", image: "/assets/images/portfolio/common/20.jpg" },
        { id: 26, title: "Project Z", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/241893442", image: "/assets/images/portfolio/common/21.jpg" },
        { id: 27, title: "Project 1", category: "B2B", video: "https://player.vimeo.com/video/376524377", image: "/assets/images/portfolio/b2b/5.jpg" },
        { id: 28, title: "Project 2", category: "B2B", video: "https://player.vimeo.com/video/616950950", image: "/assets/images/portfolio/b2b/6.jpg" },
        { id: 29, title: "Project 3", category: "B2B", video: "https://player.vimeo.com/video/376526403", image: "/assets/images/portfolio/b2b/7.jpg" },
        { id: 30, title: "Project 4", category: ["B2B", "B2C"], video: "https://player.vimeo.com/video/230583103", image: "/assets/images/portfolio/common/22.jpg" },
        { id: 31, title: "Project 5", category: ["B2B", "B2C"], video: "https://player.vimeo.com/video/672286445", image: "/assets/images/portfolio/common/23.jpg" },
        { id: 32, title: "Project 6", category: ["B2B", "B2C"], video: "https://player.vimeo.com/video/672296747", image: "/assets/images/portfolio/common/24.jpg" },
        { id: 33, title: "Project 7", category: "B2B", video: "https://player.vimeo.com/video/669468957", image: "/assets/images/portfolio/b2b/8.jpg" },
        { id: 34, title: "Project 8", category: ["B2B", "Health Care", "Information Technology"], video: "https://player.vimeo.com/video/605839173", image: "/assets/images/portfolio/common/25.jpg" },
        { id: 35, title: "Project 9", category: "b2b", video: "https://player.vimeo.com/video/746836243", image: "/assets/images/portfolio/b2b/9.jpg" },
        { id: 36, title: "Project 10", category: "b2b", video: "https://player.vimeo.com/video/746860470", image: "/assets/images/portfolio/b2b/10.jpg" },
        { id: 37, title: "Project 11", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/746864344", image: "/assets/images/portfolio/common/26.jpg" },
        { id: 38, title: "Project 12", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/338241178", image: "/assets/images/portfolio/common/27.jpg" },
        { id: 39, title: "Project 13", category: "B2C", video: "https://player.vimeo.com/video/752503041", image: "/assets/images/portfolio/b2c/1.jpg" },
        { id: 40, title: "Project 14", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/675875915", image: "/assets/images/portfolio/common/28.png" },
        { id: 41, title: "Project 15", category: "B2C", video: "https://player.vimeo.com/video/602238564", image: "/assets/images/portfolio/b2c/3.jpg" },
        { id: 42, title: "Project 16", category: "B2C", video: "https://player.vimeo.com/video/686662479", image: "/assets/images/portfolio/b2c/4.jpg" },
        { id: 43, title: "Project 17", category: "B2C", video: "https://player.vimeo.com/video/672308918", image: "/assets/images/portfolio/b2c/5.jpg" },
        { id: 44, title: "Project 18", category: "B2C", video: "https://player.vimeo.com/video/686660839", image: "/assets/images/portfolio/b2c/6.jpg" },
        { id: 45, title: "Project 19", category: "B2C", video: "https://player.vimeo.com/video/649502318", image: "/assets/images/portfolio/b2c/7.jpg" },
        { id: 46, title: "Project 20", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/602235228", image: "/assets/images/portfolio/common/29.jpg" },
        { id: 47, title: "Project 21", category: ["B2C", "Health Care"], video: "https://player.vimeo.com/video/218258220", image: "/assets/images/portfolio/common/30.jpg" },
        { id: 48, title: "Project 22", category: "B2C", video: "https://player.vimeo.com/video/173398588", image: "/assets/images/portfolio/b2c/8.jpg" },
        { id: 49, title: "Project 23", category: "B2C", video: "https://player.vimeo.com/video/602249799", image: "/assets/images/portfolio/b2c/9.webp" },
        { id: 50, title: "Project 24", category: "B2C", video: "https://player.vimeo.com/video/173401376", image: "/assets/images/portfolio/b2c/10.jpg" },
        { id: 51, title: "Project 25", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/602254996", image: "/assets/images/portfolio/common/31.jpg" },
        { id: 52, title: "Project 26", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/137285093", image: "/assets/images/portfolio/common/32.jpg" },
        { id: 53, title: "Project 27", category: "B2C", video: "https://player.vimeo.com/video/613895549", image: "/assets/images/portfolio/b2c/11.jpg" },
        { id: 54, title: "Project 28", category: "B2C", video: "https://player.vimeo.com/video/149439393", image: "/assets/images/portfolio/b2c/12.jpg" },
        { id: 55, title: "Project 29", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/191619873", image: "/assets/images/portfolio/common/33.jpg" },
        { id: 56, title: "Project 30", category: "B2C", video: "https://player.vimeo.com/video/602236300", image: "/assets/images/portfolio/b2c/13.jpg" },
        { id: 57, title: "Project 31", category: "B2C", video: "https://player.vimeo.com/video/602218801", image: "/assets/images/portfolio/b2c/15.png" },
        { id: 58, title: "Project 32", category: ["B2C", "Education"], video: "https://player.vimeo.com/video/228398846", image: "/assets/images/portfolio/common/34.jpg" },
        { id: 59, title: "Project 33", category: "B2C", video: "https://player.vimeo.com/video/229917115", image: "/assets/images/portfolio/b2c/14.jpg" },
        { id: 60, title: "Project 34", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/746888030", image: "/assets/images/portfolio/common/35.jpg" },
        { id: 61, title: "Project 35", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/602266052", image: "/assets/images/portfolio/common/36.jpg" },
        { id: 62, title: "Project 36", category: "B2C", video: "https://player.vimeo.com/video/614000697", image: "/assets/images/portfolio/b2c/16.jpg" },
        { id: 63, title: "Project 37", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/376867623", image: "/assets/images/portfolio/common/37.jpg" },
        { id: 64, title: "Project 38", category: ["B2C", "Health Care"], video: "https://player.vimeo.com/video/602237733", image: "/assets/images/portfolio/common/38.jpg" },
        { id: 65, title: "Project 39", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/662990800", image: "/assets/images/portfolio/common/39.jpg" },
        { id: 66, title: "Project 40", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/605836796", image: "/assets/images/portfolio/common/40.jpg" },
        { id: 67, title: "Project 41", category: "B2C", video: "https://player.vimeo.com/video/698967839", image: "/assets/images/portfolio/b2c/17.jpg" },
        { id: 68, title: "Project 42", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/338238841", image: "/assets/images/portfolio/common/41.jpg" },
        { id: 69, title: "Project 43", category: ["B2C", "Health Care"], video: "https://player.vimeo.com/video/229917410", image: "/assets/images/portfolio/common/42.jpg" },
        { id: 70, title: "Project 44", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/229917410", image: "/assets/images/portfolio/common/43.jpg" },
        { id: 71, title: "Project 45", category: ["B2C"], video: "https://player.vimeo.com/video/149439391", image: "/assets/images/portfolio/b2c/18.jpg" },
        { id: 72, title: "Project 46", category: ["B2C"], video: "https://player.vimeo.com/video/746904627", image: "/assets/images/portfolio/b2c/19.jpg" },
        { id: 73, title: "Project 47", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/346205067", image: "/assets/images/portfolio/common/44.jpg" },
        { id: 74, title: "Project 48", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/376862732", image: "/assets/images/portfolio/common/45.jpg" },
        { id: 75, title: "Project 49", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/614006179", image: "/assets/images/portfolio/common/46.jpg" },
        { id: 76, title: "Project 50", category: ["B2C", "Health Care", "Information Technology"], video: "https://player.vimeo.com/video/602267009", image: "/assets/images/portfolio/common/47.jpg" },
        { id: 77, title: "Project 51", category: ["B2C"], video: "https://player.vimeo.com/video/668278734", image: "/assets/images/portfolio/b2c/20.jpg" },
        { id: 78, title: "Project 52", category: ["B2C"], video: "https://player.vimeo.com/video/669467407", image: "/assets/images/portfolio/b2c/21.jpg" },
        { id: 79, title: "Project 53", category: ["B2C"], video: "https://player.vimeo.com/video/746866555", image: "/assets/images/portfolio/b2c/22.jpg" },
        { id: 80, title: "Project 54", category: ["B2C"], video: "https://player.vimeo.com/video/746866555", image: "/assets/images/portfolio/b2c/23.jpg" },
        { id: 81, title: "Project 55", category: ["B2C"], video: "https://player.vimeo.com/video/748665036", image: "/assets/images/portfolio/b2c/24.jpg" },
        { id: 82, title: "Project 56", category: ["B2C"], video: "https://player.vimeo.com/video/748694155", image: "/assets/images/portfolio/b2c/25.jpg" },
        { id: 83, title: "Project 57", category: ["Information Technology"], video: "https://player.vimeo.com/video/746867677", image: "/assets/images/portfolio/it/1.jpg" },
        { id: 84, title: "Project 58", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/602224101", image: "/assets/images/portfolio/common/48.jpg" },
        { id: 85, title: "Project 59", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/376524948", image: "/assets/images/portfolio/common/49.jpg" },
        { id: 86, title: "Project 60", category: ["Information Technology"], video: "https://player.vimeo.com/video/613862165", image: "/assets/images/portfolio/it/2.jpg" },
        { id: 87, title: "Project 61", category: ["Information Technology"], video: "https://player.vimeo.com/video/602259971", image: "/assets/images/portfolio/it/3.webp" },
        { id: 88, title: "Project 62", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/376525302", image: "/assets/images/portfolio/common/50.jpg" },
        { id: 89, title: "Project 63", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/252551530", image: "/assets/images/portfolio/common/51.jpg" },
        { id: 90, title: "Project 64", category: ["Information Technology"], video: "https://player.vimeo.com/video/376526403", image: "/assets/images/portfolio/it/3.jpg" },
        { id: 91, title: "Project 65", category: ["Information Technology"], video: "https://player.vimeo.com/video/376864440", image: "/assets/images/portfolio/it/4.jpg" },
        { id: 92, title: "Project 66", category: ["Education", "Information Technology"], video: "https://player.vimeo.com/video/649490400", image: "/assets/images/portfolio/common/52.jpg" },
        { id: 93, title: "Project 67", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/661489735", image: "/assets/images/portfolio/common/53.jpg" },
        { id: 94, title: "Project 68", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/696060494", image: "/assets/images/portfolio/common/54.jpg" },
        { id: 95, title: "Project 69", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/661489253", image: "/assets/images/portfolio/common/55.jpg" },
        { id: 96, title: "Project 70", category: ["Education", "Health Care"], video: "https://player.vimeo.com/video/602244262", image: "/assets/images/portfolio/common/56.jpg" },
        { id: 97, title: "Project 71", category: ["Health Care"], video: "https://player.vimeo.com/video/613686658", image: "/assets/images/portfolio/health/1.jpg" },
        { id: 98, title: "Project 72", category: ["Health Care"], video: "https://player.vimeo.com/video/696056314", image: "/assets/images/portfolio/health/4.jpg" },
        { id: 100, title: "Project 74", category: ["Health Care"], video: "https://player.vimeo.com/video/696058349", image: "/assets/images/portfolio/health/10.jpg" },
        { id: 101, title: "Project 75", category: ["Education", "Health Care"], video: "https://player.vimeo.com/video/376526533", image: "/assets/images/portfolio/common/57.jpg" },
        { id: 102, title: "Project 76", category: ["Education", "Health Care"], video: "https://player.vimeo.com/video/191621806", image: "/assets/images/portfolio/common/58.jpg" },
        { id: 103, title: "Project 77", category: ["Health Care"], video: "https://player.vimeo.com/video/602236300", image: "/assets/images/portfolio/health/11.jpg" },
        { id: 104, title: "Project 78", category: ["Education", "Health Care"], video: "https://player.vimeo.com/video/376526063", image: "/assets/images/portfolio/common/59.jpg" },
        { id: 105, title: "Project 79", category: ["Health Care"], video: "https://player.vimeo.com/video/149439391", image: "/assets/images/portfolio/health/5.jpg" },
        { id: 106, title: "Project 80", category: ["Education", "Health Care"], video: "https://player.vimeo.com/video/661491733", image: "/assets/images/portfolio/common/60.jpg" },
        { id: 107, title: "Project 81", category: ["Education", "Health Care"], video: "https://player.vimeo.com/video/616238804", image: "/assets/images/portfolio/common/61.jpg" },
        { id: 108, title: "Project 82", category: ["Health Care"], video: "https://player.vimeo.com/video/329239075", image: "/assets/images/portfolio/health/6.jpg" },
        { id: 109, title: "Project 83", category: ["Health Care"], video: "https://player.vimeo.com/video/665777763", image: "/assets/images/portfolio/health/7.jpg" },
        { id: 110, title: "Project 84", category: ["Health Care"], video: "https://player.vimeo.com/video/338237220", image: "/assets/images/portfolio/health/8.jpg" },
        { id: 111, title: "Project 85", category: ["Education"], video: "https://player.vimeo.com/video/605842193", image: "/assets/images/portfolio/education/3.jpg" },
        { id: 112, title: "Project 86", category: ["Education"], video: "https://player.vimeo.com/video/338239046", image: "/assets/images/portfolio/education/1.jpg" },
        { id: 113, title: "Project 87", category: ["Education"], video: "https://player.vimeo.com/video/662286760", image: "/assets/images/portfolio/education/2.jpg" },
        { id: 114, title: "Project 88", category: ["Education"], video: "https://player.vimeo.com/video/227445561", image: "/assets/images/portfolio/education/4.jpg" },
        { id: 115, title: "Project 89", category: ["Education"], video: "https://player.vimeo.com/video/376863560", image: "/assets/images/portfolio/education/5.jpg" },
        { id: 116, title: "Project 90", category: ["Education"], video: "https://player.vimeo.com/video/663292824", image: "/assets/images/portfolio/education/6.jpg" },
        { id: 117, title: "Project 91", category: ["Education"], video: "https://player.vimeo.com/video/615684605", image: "/assets/images/portfolio/education/7.jpg" },
        { id: 118, title: "Project 92", category: ["Education"], video: "https://player.vimeo.com/video/615693664", image: "/assets/images/portfolio/education/8.jpg" },
        { id: 119, title: "Project 93", category: ["Education"], video: "https://player.vimeo.com/video/615694631", image: "/assets/images/portfolio/education/9.jpg" },
        { id: 120, title: "Project 94", category: ["Education"], video: "https://player.vimeo.com/video/616076229", image: "/assets/images/portfolio/education/10.jpg" },
        { id: 121, title: "Project 95", category: ["Education"], video: "https://player.vimeo.com/video/616253550", image: "/assets/images/portfolio/education/11.jpg" },
        { id: 122, title: "Project 96", category: ["Education"], video: "https://player.vimeo.com/video/616279715", image: "/assets/images/portfolio/education/12.jpg" },
        { id: 123, title: "Project 97", category: ["Education"], video: "https://player.vimeo.com/video/615772908", image: "/assets/images/portfolio/education/13.jpg" },
        { id: 124, title: "Project 98", category: ["Education"], video: "https://player.vimeo.com/video/615779766", image: "/assets/images/portfolio/education/14.jpg" },
        { id: 125, title: "Project 99", category: ["Education"], video: "https://player.vimeo.com/video/661490312", image: "/assets/images/portfolio/education/15.jpg" },
        { id: 126, title: "Project 100", category: ["Education"], video: "https://player.vimeo.com/video/649636731", image: "/assets/images/portfolio/education/16.jpg" },
        { id: 127, title: "Project 101", category: ["Education"], video: "https://player.vimeo.com/video/649619773", image: "/assets/images/portfolio/education/17.jpg" },
        { id: 128, title: "Project 102", category: ["Education"], video: "https://player.vimeo.com/video/649626283", image: "/assets/images/portfolio/education/18.jpg" },
        { id: 129, title: "Project 103", category: ["Education"], video: "https://player.vimeo.com/video/649643712", image: "/assets/images/portfolio/education/19.jpg" },
        { id: 130, title: "Project 104", category: ["Education"], video: "https://player.vimeo.com/video/649641438", image: "/assets/images/portfolio/education/20.jpg" },
        { id: 131, title: "Project 105", category: ["Education"], video: "https://player.vimeo.com/video/748664039", image: "/assets/images/portfolio/education/21.jpg" },
        { id: 132, title: "Project 106", category: ["Education"], video: "https://player.vimeo.com/video/702846036", image: "/assets/images/portfolio/education/22.jpeg" },
        { id: 133, title: "Project 107", category: ["Information Technology"], video: "https://player.vimeo.com/video/1035226010?h=3189332ea6", image: "/assets/images/portfolio/it/5.jpg" },
        { id: 134, title: "Project 108", category: ["Education"], video: "https://player.vimeo.com/video/1035230432", image: "/assets/images/portfolio/education/23.jpg" },
        { id: 135, title: "Project 109", category: ["Health"], video: "https://player.vimeo.com/video/1055318085", image: "/assets/images/portfolio/health/2.png" },
        { id: 136, title: "Project 110", category: ["Health"], video: "https://player.vimeo.com/video/1035226010?h=3189332ea6", image: "/assets/images/portfolio/health/3.png" },
        { id: 137, title: "Project 111", category: ["Education", "Information Technology"], video: "https://player.vimeo.com/video/1055986558?h=60faed8255", image: "/assets/images/portfolio/common/62.png" },
        { id: 138, title: "Project 112", category: ["Information Technology"], video: "https://player.vimeo.com/video/1055985754?h=17f2047c47", image: "/assets/images/portfolio/it/6.png" },
        { id: 139, title: "Project 113", category: ["Information Technology"], video: "https://player.vimeo.com/video/1055329035?h=5470dd428d", image: "/assets/images/portfolio/it/7.png" },
        { id: 140, title: "Project 114", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/1055326964?h=1f4d4163d0", image: "/assets/images/portfolio/common/63.png" },
        { id: 141, title: "Project 115", category: ["Information Technology"], video: "https://player.vimeo.com/video/1055325678?h=36dd9ef20d", image: "/assets/images/portfolio/it/8.png" },
        { id: 142, title: "Project 116", category: ["Information Technology"], video: "https://player.vimeo.com/video/1055325179?h=b23c91e5b0", image: "/assets/images/portfolio/it/9.png" },
        { id: 143, title: "Project 117", category: ["Information Technology"], video: "https://player.vimeo.com/video/1055320580?h=40a35618ce", image: "/assets/images/portfolio/it/10.png" },
        { id: 144, title: "Project 118", category: ["Information Technology"], video: "https://player.vimeo.com/video/1042932806?h=3e82a9d1a3", image: "/assets/images/portfolio/it/11.jpg" },










    ];
    const filteredItems =
        filter === "All"
            ? items
            : items.filter((item) =>
                item.category.includes(filter)
            );

    useEffect(() => {
        const modal = document.getElementById("portfolioModal");

        const handleClose = () => {
            setVideoUrl("");
            setVideoTitle("");
        };

        modal?.addEventListener("hidden.bs.modal", handleClose);
        return () =>
            modal?.removeEventListener("hidden.bs.modal", handleClose);
    }, []);

    const openModal = (item) => {
        setVideoUrl(item.video);
        setVideoTitle(item.title);

        const modal = new window.bootstrap.Modal(
            document.getElementById("portfolioModal")
        );
        modal.show();
    };

    return (
        <>
            <section className="portfolio-section">
                <div className="container-fluid g-0">
                    <div className="row g-0">
                        <div className="col-12 text-center">
                            {/* Filters */}
                            <div className="portfolio-filters mt-md-0 mt-6 text-center">

                                {/* Desktop Buttons */}
                                <div className="d-none d-md-block">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setFilter(cat)}
                                            className={filter === cat ? "active" : ""}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>

                                {/* Mobile Dropdown */}
                                <div className="d-block d-md-none">
                                    <select
                                        className="form-select"
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                    >
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-12 g-0">
                            {/* Masonry */}
                            <div className="portfolio-masonry">
                                {filteredItems.map((item) => (
                                    <div key={item.id} className="portfolio-masonry-item video-thumb" onClick={() => openModal(item)}>
                                        <img src={item.image} alt={item.title} />
                                        <span className="play-btn">
                                            <i className="play-icon"></i>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <div
                className="modal fade"
                id="portfolioModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            {videoUrl && (
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        src={videoUrl}
                                        title={videoTitle}
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}    