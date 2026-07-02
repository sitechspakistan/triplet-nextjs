"use client";
import { useState, useEffect } from "react";

export default function Portfolio() {
    const [filter, setFilter] = useState("All");
    const [videoUrl, setVideoUrl] = useState("");
    const [videoTitle, setVideoTitle] = useState("");
    const categories = ["All", "B2B", "B2C", "Education", "Health Care", "Information Technology"];
    const [loadedCount, setLoadedCount] = useState(0);
    const [isPageLoading, setIsPageLoading] = useState(true);


    const items = [
        { id: 1, title: "Microsoft - Employee Devices I Explainer Video by Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/602215167?h=01d057ba98", image: "/assets/images/portfolio/b2c/2.png" },
        { id: 2, title: "Creative Triplet", category: "Information Technology", video: "https://player.vimeo.com/video/746877725", image: "/assets/images/portfolio/b2b/1.jpg" },
        { id: 3, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/376859283", image: "/assets/images/portfolio/common/4.webp" },
        { id: 4, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/common/1.jpg" },
        { id: 5, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/376859283", image: "/assets/images/portfolio/common/3.jpg" },
        { id: 6, title: "Creative Triplet", category: ["B2C", "B2B", "Information Technology"], video: "https://player.vimeo.com/video/602213469", image: "/assets/images/portfolio/common/5.png" },
        { id: 7, title: "Creative Triplet", category: ["B2C", "Health Care", "Information Technology"], video: "https://player.vimeo.com/video/602225850", image: "/assets/images/portfolio/common/2.jpg" },
        { id: 8, title: "Creative Triplet", category: "B2B", video: "https://player.vimeo.com/video/605842193", image: "/assets/images/portfolio/b2b/2.jpg" },
        { id: 9, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/336123110", image: "/assets/images/portfolio/common/6.jpg" },
        { id: 10, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/602256340", image: "/assets/images/portfolio/common/7.jpg" },
        { id: 11, title: "Creative Triplet", category: "Information Technology", video: "https://player.vimeo.com/video/746865222", image: "/assets/images/portfolio/b2b/3.jpg" },
        { id: 12, title: "Creative Triplet", category: ["B2C", "B2B", "Information Technology"], video: "https://player.vimeo.com/video/696057141", image: "/assets/images/portfolio/common/8.jpg" },
        { id: 13, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/686665400", image: "/assets/images/portfolio/b2b/4.jpg" },
        { id: 14, title: "Creative Triplet", category: ["B2C", "B2B"], video: "https://player.vimeo.com/video/336133361", image: "/assets/images/portfolio/common/9.jpg" },
        { id: 15, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/602234110", image: "/assets/images/portfolio/common/10.png" },
        { id: 16, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/616274510", image: "/assets/images/portfolio/common/12.jpg" },
        { id: 17, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/616267571", image: "/assets/images/portfolio/common/11.jpg" },
        { id: 18, title: "Creative Triplet", category: ["B2B", "B2C"], video: "https://player.vimeo.com/video/614002618", image: "/assets/images/portfolio/common/13.jpg" },
        { id: 19, title: "Creative Triplet", category: ["B2C", "B2B", "Information Technology"], video: "https://player.vimeo.com/video/748818309", image: "/assets/images/portfolio/common/14.png" },
        { id: 20, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/746902309", image: "/assets/images/portfolio/common/15.jpg" },
        { id: 21, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/602262713", image: "/assets/images/portfolio/common/16.jpg" },
        { id: 22, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/338239964", image: "/assets/images/portfolio/common/17.png" },
        { id: 23, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/376867121", image: "/assets/images/portfolio/common/18.jpg" },
        { id: 24, title: "Creative Triplet", category: ["B2B", "B2C"], video: "https://player.vimeo.com/video/602222865", image: "/assets/images/portfolio/common/19.jpg" },
        { id: 25, title: "Creative Triplet", category: ["B2B", "B2C"], video: "https://player.vimeo.com/video/672297683", image: "/assets/images/portfolio/common/20.jpg" },
        { id: 26, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/241893442", image: "/assets/images/portfolio/common/21.jpg" },
        { id: 27, title: "Creative Triplet", category: "B2B", video: "https://player.vimeo.com/video/376524377", image: "/assets/images/portfolio/b2b/5.jpg" },
        { id: 28, title: "Creative Triplet", category: "B2B", video: "https://player.vimeo.com/video/616950950", image: "/assets/images/portfolio/b2b/6.jpg" },
        { id: 29, title: "Creative Triplet", category: "B2B", video: "https://player.vimeo.com/video/376526403", image: "/assets/images/portfolio/b2b/7.jpg" },
        { id: 30, title: "Creative Triplet", category: ["B2B", "B2C"], video: "https://player.vimeo.com/video/230583103", image: "/assets/images/portfolio/common/22.jpg" },
        { id: 31, title: "Creative Triplet", category: ["B2B", "B2C"], video: "https://player.vimeo.com/video/672286445", image: "/assets/images/portfolio/common/23.jpg" },
        { id: 32, title: "Creative Triplet", category: ["B2B", "B2C"], video: "https://player.vimeo.com/video/672296747", image: "/assets/images/portfolio/common/24.jpg" },
        { id: 33, title: "Creative Triplet", category: "B2B", video: "https://player.vimeo.com/video/669468957", image: "/assets/images/portfolio/b2b/8.jpg" },
        { id: 34, title: "Creative Triplet", category: ["B2B", "Health Care", "Information Technology"], video: "https://player.vimeo.com/video/605839173", image: "/assets/images/portfolio/common/25.jpg" },
        { id: 35, title: "Creative Triplet", category: "b2b", video: "https://player.vimeo.com/video/746836243", image: "/assets/images/portfolio/b2b/9.jpg" },
        { id: 36, title: "Creative Triplet", category: "b2b", video: "https://player.vimeo.com/video/746860470", image: "/assets/images/portfolio/b2b/10.jpg" },
        { id: 37, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/746864344", image: "/assets/images/portfolio/common/26.jpg" },
        { id: 38, title: "Creative Triplet", category: ["B2B", "Information Technology"], video: "https://player.vimeo.com/video/338241178", image: "/assets/images/portfolio/common/27.jpg" },
        { id: 39, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/752503041", image: "/assets/images/portfolio/b2c/1.jpg" },
        { id: 40, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/675875915", image: "/assets/images/portfolio/common/28.png" },
        { id: 41, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/602238564", image: "/assets/images/portfolio/b2c/3.jpg" },
        { id: 42, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/686662479", image: "/assets/images/portfolio/b2c/4.jpg" },
        { id: 43, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/672308918", image: "/assets/images/portfolio/b2c/5.jpg" },
        { id: 44, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/686660839", image: "/assets/images/portfolio/b2c/6.jpg" },
        { id: 45, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/649502318", image: "/assets/images/portfolio/b2c/7.jpg" },
        { id: 46, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/602235228", image: "/assets/images/portfolio/common/29.jpg" },
        { id: 47, title: "Creative Triplet", category: ["B2C", "Health Care"], video: "https://player.vimeo.com/video/218258220", image: "/assets/images/portfolio/common/30.jpg" },
        { id: 48, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/173398588", image: "/assets/images/portfolio/b2c/8.jpg" },
        { id: 49, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/602249799", image: "/assets/images/portfolio/b2c/9.webp" },
        { id: 50, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/173401376", image: "/assets/images/portfolio/b2c/10.jpg" },
        { id: 51, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/602254996", image: "/assets/images/portfolio/common/31.jpg" },
        { id: 52, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/137285093", image: "/assets/images/portfolio/common/32.jpg" },
        { id: 53, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/613895549", image: "/assets/images/portfolio/b2c/11.jpg" },
        { id: 54, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/149439393", image: "/assets/images/portfolio/b2c/12.jpg" },
        { id: 55, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/191619873", image: "/assets/images/portfolio/common/33.jpg" },
        { id: 56, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/602236300", image: "/assets/images/portfolio/b2c/13.jpg" },
        { id: 57, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/602218801", image: "/assets/images/portfolio/b2c/15.png" },
        { id: 58, title: "Creative Triplet", category: ["B2C", "Education"], video: "https://player.vimeo.com/video/228398846", image: "/assets/images/portfolio/common/34.jpg" },
        { id: 59, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/229917115", image: "/assets/images/portfolio/b2c/14.jpg" },
        { id: 60, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/746888030", image: "/assets/images/portfolio/common/35.jpg" },
        { id: 61, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/602266052", image: "/assets/images/portfolio/common/36.jpg" },
        { id: 62, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/614000697", image: "/assets/images/portfolio/b2c/16.jpg" },
        { id: 63, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/376867623", image: "/assets/images/portfolio/common/37.jpg" },
        { id: 64, title: "Creative Triplet", category: ["B2C", "Health Care"], video: "https://player.vimeo.com/video/602237733", image: "/assets/images/portfolio/common/38.jpg" },
        { id: 65, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/662990800", image: "/assets/images/portfolio/common/39.jpg" },
        { id: 66, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/605836796", image: "/assets/images/portfolio/common/40.jpg" },
        { id: 67, title: "Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/698967839", image: "/assets/images/portfolio/b2c/17.jpg" },
        { id: 68, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/338238841", image: "/assets/images/portfolio/common/41.jpg" },
        { id: 69, title: "Creative Triplet", category: ["B2C", "Health Care"], video: "https://player.vimeo.com/video/229917410", image: "/assets/images/portfolio/common/42.jpg" },
        { id: 70, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/229917410", image: "/assets/images/portfolio/common/43.jpg" },
        { id: 71, title: "Creative Triplet", category: ["B2C"], video: "https://player.vimeo.com/video/149439391", image: "/assets/images/portfolio/b2c/18.jpg" },
        { id: 72, title: "Creative Triplet", category: ["B2C"], video: "https://player.vimeo.com/video/746904627", image: "/assets/images/portfolio/b2c/19.jpg" },
        { id: 73, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/346205067", image: "/assets/images/portfolio/common/44.jpg" },
        { id: 74, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/376862732", image: "/assets/images/portfolio/common/45.jpg" },
        { id: 75, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/614006179", image: "/assets/images/portfolio/common/46.jpg" },
        { id: 76, title: "Creative Triplet", category: ["B2C", "Health Care", "Information Technology"], video: "https://player.vimeo.com/video/602267009", image: "/assets/images/portfolio/common/47.jpg" },
        { id: 77, title: "Creative Triplet", category: ["B2C"], video: "https://player.vimeo.com/video/668278734", image: "/assets/images/portfolio/b2c/20.jpg" },
        { id: 78, title: "Creative Triplet", category: ["B2C"], video: "https://player.vimeo.com/video/669467407", image: "/assets/images/portfolio/b2c/21.jpg" },
        { id: 79, title: "Creative Triplet", category: ["B2C"], video: "https://player.vimeo.com/video/746866555", image: "/assets/images/portfolio/b2c/22.jpg" },
        { id: 80, title: "Creative Triplet", category: ["B2C"], video: "https://player.vimeo.com/video/746866555", image: "/assets/images/portfolio/b2c/23.jpg" },
        { id: 81, title: "Creative Triplet", category: ["B2C"], video: "https://player.vimeo.com/video/748665036", image: "/assets/images/portfolio/b2c/24.jpg" },
        { id: 82, title: "Creative Triplet", category: ["B2C"], video: "https://player.vimeo.com/video/748694155", image: "/assets/images/portfolio/b2c/25.jpg" },
        { id: 83, title: "Creative Triplet", category: ["Information Technology"], video: "https://player.vimeo.com/video/746867677", image: "/assets/images/portfolio/it/1.jpg" },
        { id: 84, title: "Creative Triplet", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/602224101", image: "/assets/images/portfolio/common/48.jpg" },
        { id: 85, title: "Creative Triplet", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/376524948", image: "/assets/images/portfolio/common/49.jpg" },
        { id: 86, title: "Creative Triplet", category: ["Information Technology"], video: "https://player.vimeo.com/video/613862165", image: "/assets/images/portfolio/it/2.jpg" },
        { id: 87, title: "Creative Triplet", category: ["Information Technology"], video: "https://player.vimeo.com/video/602259971", image: "/assets/images/portfolio/it/3.webp" },
        { id: 88, title: "Creative Triplet", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/376525302", image: "/assets/images/portfolio/common/50.jpg" },
        { id: 89, title: "Creative Triplet", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/252551530", image: "/assets/images/portfolio/common/51.jpg" },
        { id: 90, title: "Creative Triplet", category: ["Information Technology"], video: "https://player.vimeo.com/video/376526403", image: "/assets/images/portfolio/it/3.jpg" },
        { id: 91, title: "Creative Triplet", category: ["Information Technology"], video: "https://player.vimeo.com/video/376864440", image: "/assets/images/portfolio/it/4.jpg" },
        { id: 92, title: "Creative Triplet", category: ["Education", "Information Technology"], video: "https://player.vimeo.com/video/649490400", image: "/assets/images/portfolio/common/52.jpg" },
        { id: 93, title: "Creative Triplet", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/661489735", image: "/assets/images/portfolio/common/53.jpg" },
        { id: 94, title: "Creative Triplet", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/696060494", image: "/assets/images/portfolio/common/54.jpg" },
        { id: 95, title: "Creative Triplet", category: ["Health Care", "Information Technology"], video: "https://player.vimeo.com/video/661489253", image: "/assets/images/portfolio/common/55.jpg" },
        { id: 96, title: "Creative Triplet", category: ["Education", "Health Care"], video: "https://player.vimeo.com/video/602244262", image: "/assets/images/portfolio/common/56.jpg" },
        { id: 97, title: "Creative Triplet", category: ["Health Care"], video: "https://player.vimeo.com/video/613686658", image: "/assets/images/portfolio/health/1.jpg" },
        { id: 98, title: "Creative Triplet", category: ["Health Care"], video: "https://player.vimeo.com/video/696056314", image: "/assets/images/portfolio/health/4.jpg" },
        { id: 100, title: "Creative Triplet", category: ["Health Care"], video: "https://player.vimeo.com/video/696058349", image: "/assets/images/portfolio/health/10.jpg" },
        { id: 101, title: "Creative Triplet", category: ["Education", "Health Care"], video: "https://player.vimeo.com/video/376526533", image: "/assets/images/portfolio/common/57.jpg" },
        { id: 102, title: "Creative Triplet", category: ["Education", "Health Care"], video: "https://player.vimeo.com/video/191621806", image: "/assets/images/portfolio/common/58.jpg" },
        { id: 103, title: "Creative Triplet", category: ["Health Care"], video: "https://player.vimeo.com/video/602236300", image: "/assets/images/portfolio/health/11.jpg" },
        { id: 104, title: "Creative Triplet", category: ["Education", "Health Care"], video: "https://player.vimeo.com/video/376526063", image: "/assets/images/portfolio/common/59.jpg" },
        { id: 105, title: "Creative Triplet", category: ["Health Care"], video: "https://player.vimeo.com/video/149439391", image: "/assets/images/portfolio/health/5.jpg" },
        { id: 106, title: "Creative Triplet", category: ["Education", "Health Care"], video: "https://player.vimeo.com/video/661491733", image: "/assets/images/portfolio/common/60.jpg" },
        { id: 107, title: "Creative Triplet", category: ["Education", "Health Care"], video: "https://player.vimeo.com/video/616238804", image: "/assets/images/portfolio/common/61.jpg" },
        { id: 108, title: "Creative Triplet", category: ["Health Care"], video: "https://player.vimeo.com/video/329239075", image: "/assets/images/portfolio/health/6.jpg" },
        { id: 109, title: "Creative Triplet", category: ["Health Care"], video: "https://player.vimeo.com/video/665777763", image: "/assets/images/portfolio/health/7.jpg" },
        { id: 110, title: "Creative Triplet", category: ["Health Care"], video: "https://player.vimeo.com/video/338237220", image: "/assets/images/portfolio/health/8.jpg" },
        { id: 111, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/605842193", image: "/assets/images/portfolio/education/3.jpg" },
        { id: 112, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/338239046", image: "/assets/images/portfolio/education/1.jpg" },
        { id: 113, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/662286760", image: "/assets/images/portfolio/education/2.jpg" },
        { id: 114, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/227445561", image: "/assets/images/portfolio/education/4.jpg" },
        { id: 115, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/376863560", image: "/assets/images/portfolio/education/5.jpg" },
        { id: 116, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/663292824", image: "/assets/images/portfolio/education/6.jpg" },
        { id: 117, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/615684605", image: "/assets/images/portfolio/education/7.jpg" },
        { id: 118, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/615693664", image: "/assets/images/portfolio/education/8.jpg" },
        { id: 119, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/615694631", image: "/assets/images/portfolio/education/9.jpg" },
        { id: 120, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/616076229", image: "/assets/images/portfolio/education/10.jpg" },
        { id: 121, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/616253550", image: "/assets/images/portfolio/education/11.jpg" },
        { id: 122, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/616279715", image: "/assets/images/portfolio/education/12.jpg" },
        { id: 123, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/615772908", image: "/assets/images/portfolio/education/13.jpg" },
        { id: 124, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/615779766", image: "/assets/images/portfolio/education/14.jpg" },
        { id: 125, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/661490312", image: "/assets/images/portfolio/education/15.jpg" },
        { id: 126, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/649636731", image: "/assets/images/portfolio/education/16.jpg" },
        { id: 127, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/649619773", image: "/assets/images/portfolio/education/17.jpg" },
        { id: 128, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/649626283", image: "/assets/images/portfolio/education/18.jpg" },
        { id: 129, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/649643712", image: "/assets/images/portfolio/education/19.jpg" },
        { id: 130, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/649641438", image: "/assets/images/portfolio/education/20.jpg" },
        { id: 131, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/748664039", image: "/assets/images/portfolio/education/21.jpg" },
        { id: 132, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/702846036", image: "/assets/images/portfolio/education/22.jpeg" },
        { id: 133, title: "Creative Triplet", category: ["Information Technology"], video: "https://player.vimeo.com/video/1035226010?h=3189332ea6", image: "/assets/images/portfolio/it/5.jpg" },
        { id: 134, title: "Creative Triplet", category: ["Education"], video: "https://player.vimeo.com/video/1035230432", image: "/assets/images/portfolio/education/23.jpg" },
        { id: 135, title: "Creative Triplet", category: ["Health"], video: "https://player.vimeo.com/video/1055318085", image: "/assets/images/portfolio/health/2.png" },
        { id: 136, title: "Creative Triplet", category: ["Health"], video: "https://player.vimeo.com/video/1035226010?h=3189332ea6", image: "/assets/images/portfolio/health/3.png" },
        { id: 137, title: "Creative Triplet", category: ["Education", "Information Technology"], video: "https://player.vimeo.com/video/1055986558?h=60faed8255", image: "/assets/images/portfolio/common/62.png" },
        { id: 138, title: "Creative Triplet", category: ["Information Technology"], video: "https://player.vimeo.com/video/1055985754?h=17f2047c47", image: "/assets/images/portfolio/it/6.png" },
        { id: 139, title: "Creative Triplet", category: ["Information Technology"], video: "https://player.vimeo.com/video/1055329035?h=5470dd428d", image: "/assets/images/portfolio/it/7.png" },
        { id: 140, title: "Creative Triplet", category: ["B2C", "Information Technology"], video: "https://player.vimeo.com/video/1055326964?h=1f4d4163d0", image: "/assets/images/portfolio/common/63.png" },
        { id: 141, title: "Creative Triplet", category: ["Information Technology"], video: "https://player.vimeo.com/video/1055325678?h=36dd9ef20d", image: "/assets/images/portfolio/it/8.png" },
        { id: 142, title: "Creative Triplet", category: ["Information Technology"], video: "https://player.vimeo.com/video/1055325179?h=b23c91e5b0", image: "/assets/images/portfolio/it/9.png" },
        { id: 143, title: "Creative Triplet", category: ["Information Technology"], video: "https://player.vimeo.com/video/1055320580?h=40a35618ce", image: "/assets/images/portfolio/it/10.png" },
        { id: 144, title: "Creative Triplet", category: ["Information Technology"], video: "https://player.vimeo.com/video/1042932806?h=3e82a9d1a3", image: "/assets/images/portfolio/it/11.jpg" },
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

    useEffect(() => {
        setLoadedCount(0);
        setIsPageLoading(true);
    }, [filter]);

    useEffect(() => {
        if (filteredItems.length > 0 && loadedCount >= filteredItems.length) {
            setIsPageLoading(false);
        }
    }, [loadedCount, filteredItems]);

    const handleImageLoad = () => {
        setLoadedCount((prev) => prev + 1);
    };
    useEffect(() => {

        if (isPageLoading && filteredItems.length > 0) {
            const images = document.querySelectorAll('.portfolio-masonry img');
            let currentLoaded = 0;

            images.forEach((img) => {

                if (img.complete) {
                    currentLoaded++;
                }
            });
            if (currentLoaded > 0) {
                setLoadedCount(currentLoaded);
            }
        }
    }, [filter, filteredItems, isPageLoading]);
    return (
        <>

            <section className="portfolio-section position-relative" style={{ minHeight: "100px" }}>
                {isPageLoading && (
                    <div
                        className="d-flex flex-column align-items-center justify-content-center bg-black text-white"
                        style={{
                            height: "60vh",
                            width: "100%",
                            transition: "all 0.3s ease"
                        }}
                    >
                        <div className="spinner-border text-warning mb-3" role="status"></div>
                        {/* <h5>Portfolio Items... ({loadedCount}/{filteredItems.length})</h5> */}
                    </div>
                )}
                <div className={`container-fluid g-0 ${isPageLoading ? "opacity-0" : "opacity-100"} 
                ${isPageLoading ? "invisible" : "visible"} ${isPageLoading ? "h-0" : "h-auto"} overflow-hidden`} style={{
                        transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s ease"
                    }}>
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

                    <div className="row g-0">
                        <div className="col-12 g-0">
                            {/* Masonry */}
                            <div className="portfolio-masonry">
                                {filteredItems.map((item) => (
                                    <div key={item.id} className="portfolio-masonry-item video-thumb" onClick={() => openModal(item)}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            onLoad={handleImageLoad}
                                            loading="eager"
                                        />
                                        <span className="play-btn">
                                            <i className="play-icon"></i>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Modal */}
            < div
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
            </div >

        </>
    )
}    