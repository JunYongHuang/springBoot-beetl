package com.demo.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BeetlController {

	@RequestMapping("/index2.html")
	public String index(HttpServletRequest request) {
		request.setAttribute("name", "beetl");
		return "index";
	}

	@RequestMapping("/landing")
	public String toLanding(Model model){
		model.addAttribute("doMain","/jiaotong/");
		model.addAttribute("doMainUrl","");
		model.addAttribute("f4","");
		model.addAttribute("links","{login_url:'index.html'}");
		model.addAttribute("newBizData","'http://localhost:8096/'");
		return "/jiaotong/loading";
	}
}
