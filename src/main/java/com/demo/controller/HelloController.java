package com.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/jiaotong")
public class HelloController {

    @RequestMapping("/toHello")
    public String toHello(Model model){
        model.addAttribute("username","张三");
        return "hello";
    }

    @RequestMapping("/index.html")
    public String toIndex(Model model){
        model.addAttribute("doMain","");
        model.addAttribute("doMainUrl","http://tzh.manyun.cc/api/index");
        model.addAttribute("f4","");
        model.addAttribute("links","'http://localhost:8096/'");
        model.addAttribute("newBizData","'http://localhost:8096/'");
        return "/jiaotong/index";
    }
    @RequestMapping("/loading.html")
    public String toloading(Model model){
        model.addAttribute("doMain","");
        model.addAttribute("doMainUrl","");
        model.addAttribute("f4","");
        model.addAttribute("links","{login_url:'index.html'}");
        model.addAttribute("newBizData","'http://localhost:8096/'");
        return "/jiaotong/loading";
    }
    @RequestMapping("/landing")
    public String toLanding(Model model){
        model.addAttribute("doMain","");
        model.addAttribute("doMainUrl","");
        model.addAttribute("f4","");
        model.addAttribute("links","{login_url:'index.html'}");
        model.addAttribute("newBizData","'http://localhost:8096/'");
        return "/jiaotong/loading";
    }
    @RequestMapping("/share.html")
    public String toShare(Model model){
        model.addAttribute("doMain","");
        model.addAttribute("doMainUrl","/jiaotong");
        model.addAttribute("channel","1");
        model.addAttribute("links","{login_url:'http://localhost:8096/jiaotong/index.html'}");
        model.addAttribute("newBizData","'http://localhost:8096/'");
        return "/jiaotong/share";
    }
}
